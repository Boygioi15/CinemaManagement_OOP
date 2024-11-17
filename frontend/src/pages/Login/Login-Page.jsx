import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./../../components/footer";
import Header from "../../components/header";
import AuthForm from "../../components/formcomponent.jsx";

function LoginPage() {
  const handleLogin = (formValues, isChecked) => {
    console.log(
      "Đăng nhập với username:",
      username,
      "và mật khẩu:",
      password,
      "Lưu mật khẩu:",
      isChecked
    );
  };

  const fields = [
    {
      for: "username",
      text: "Tài khoản, Email hoặc số điện thoại *",
      type: "text",
      placeholder: "irsus123",
      required: true,
    },
    {
      for: "password",
      text: "Mật khẩu *",
      type: "password",
      placeholder: "abc",
      required: true,
    },
  ];

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
              title="Đăng nhập"
              fields={fields}
              isTickRequired={true}
              tickLabel="Lưu mật khẩu đăng nhập"
              links={[
                { text: "Đăng ký", path: "/register" },
                { text: "Quên mật khẩu?", path: "/forgot-password" },
              ]}
              buttontitle="Đăng nhập"
              onSubmit={handleLogin}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
