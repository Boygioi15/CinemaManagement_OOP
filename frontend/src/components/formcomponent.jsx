import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({
  title,
  fields,
  layout = "column",
  isTickRequired = false,
  tickLabel = "Lưu mật khẩu đăng nhập",
  links = [],
  buttontitle,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.for] = ""; // Initialize form state based on fields
      return acc;
    }, {})
  );

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formValues, isChecked);
    }
  };

  return (
    <div className="flex justify-start items-center h-[calc(100vh-60px)] pl-[10%] relative z-10">
      <div className="bg-white bg-opacity-90 text-black p-5 rounded-lg  max-w-[1000px] shadow-lg">
        <h1 className="text-center mb-5 text-2xl font-bold">{title}</h1>

        {/* Render fields dynamically */}
        <div
          className={`grid gap-4 ${
            layout === "row" ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={field.for} className="block mb-1 font-bold">
                {field.text}
              </label>
              <input
                id={field.for}
                name={field.for}
                type={field.type}
                placeholder={field.placeholder}
                value={formValues[field.for]}
                onChange={handleChange}
                required={field.required || false}
                className="w-full p-2 border border-gray-300 rounded-md min-w-[350px]"
              />
            </div>
          ))}
        </div>

        {/* Optional "Tick" checkbox */}
        {isTickRequired && (
          <div className="flex items-center mb-2">
            <input
              id="remember"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mr-2"
            />
            <label htmlFor="remember">{tickLabel}</label>
          </div>
        )}

        {/* Links like forgot password, register */}
        {links.length > 0 && (
          <div className="flex justify-between items-center mb-5">
            {links.map((link, index) => (
              <a
                key={index}
                onMouseOver={(e) => (e.currentTarget.style.color = "purple")}
                onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                onClick={() => navigate(link.path)}
                className="text-black no-underline hover:underline cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-2 bg-yellow-400 rounded-md text-lg font-bold cursor-pointer hover:bg-yellow-500 mt-3"
        >
          {buttontitle}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
