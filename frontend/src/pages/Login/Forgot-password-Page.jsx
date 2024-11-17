import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./../../components/footer";
import Header from "../../components/header";
import AuthForm from "../../components/formcomponent.jsx";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const fields = [
    {
      for: "user",
      text: "Nhập email hoặc SĐT *",
      type: "text",
      placeholder: "irsus123",
      required: true,
    },
  ];

  const handleClick = async (e) => {
    // e.preventDefault();    Nhập địa chỉ email hoặc SĐT của bạn và chúng tôi sẽ gửi cho bạn mã  code để tạo mật khẩu mới
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/user/request-password-reset",
    //     {
    //       identifier: username,
    //     }
    //   );
    //   if (response.status === 200) {
    //     alert("Gửi mã xác minh thành công!");
    //     navigate("/verify-code", { state: { username } });
    //   }
    // } catch (error) {
    //   console.error("Error response:", error.response);
    //   alert(
    //     "Error: " +
    //       (error.response?.data?.msg || "An unexpected error occurred.")
    //   );
    // }
  };

  return (
    <div
      className="min-h-screen m-0 overflow-y-auto font-sans text-white bg-gradient-to-b from-[#0b0d1c] to-[#1a1a2e]bg-contain"
      style={{ backgroundImage: "url('/Images/Cover.png')" }}
    >
      <Header />

      <div className="relative z-10">
        <div className="flex h-full  bg-black min-h-screen bg-opacity-50">
          <div className="w-1/2 flex items-center pl-20">
            <AuthForm
              title="Quên mật khẩu"
              fields={fields}
              isTickRequired={false}
              buttontitle="Gửi mã xác minh"
              onSubmit={handleClick}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;
