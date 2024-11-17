import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AuthForm from "../../components/formcomponent";

function ConfirmPasswordPage() {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();

  // const username = location.state?.username || "";

  const fields = [
    {
      for: "usernewpass",
      text: "Nhập mật khẩu mới ",
      type: "password",
      placeholder: "irsus123",
      required: true,
    },
    {
      for: "confirmpass",
      text: "Xác nhận mật khẩu mới ",
      type: "password",
      placeholder: "irsus123",
      required: true,
    },
  ];

  const handleClick = async (e) => {
    // e.preventDefault();
    // if (password !== confirmPassword) {
    //   setError("Mật khẩu không khớp");
    // } else if (password.length < 8) {
    //   setError("Mật khẩu phải có ít nhất 8 ký tự");
    // } else {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5000/api/user/reset-password",
    //       {
    //         identifier: username,
    //         newPassword: confirmPassword,
    //       }
    //     );
    //     if (response.status === 200) {
    //       alert("Đặt lại mật khẩu thành công!");
    //       navigate("/");
    //     }
    //   } catch (error) {
    //     alert("Error: " + error.response?.data?.msg);
    //   }
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
              title="Đặt lại mật khẩu"
              fields={fields}
              isTickRequired={false}
              buttontitle="Xác nhận"
              onSubmit={handleClick}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmPasswordPage;
