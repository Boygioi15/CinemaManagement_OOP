import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AuthForm from "../../components/formcomponent";

function RegisterPage() {
  const handleRegister = (formValues, isChecked) => {
    console.log("Đăng nhập với username:");
  };
  const fields = [
    {
      for: "username",
      text: "Họ và tên *",
      type: "text",
      placeholder: "Họ và tên",
      required: true,
    },
    {
      for: "userBirth",
      text: "Ngày sinh *",
      type: "date",
      placeholder: "abc",
      required: true,
    },
    {
      for: "userPhone",
      text: "Số điện thoại *",
      type: "text",
      placeholder: "012...",
      required: true,
    },
    {
      for: "userAccount",
      text: "Tên đăng nhập *",
      type: "text",
      placeholder: "abc",
      required: true,
    },
    {
      for: "userCCCD",
      text: "CMND/CCCD *",
      type: "text",
      placeholder: "abc",
      required: true,
    },
    {
      for: "userEmail",
      text: "Email *",
      type: "email",
      placeholder: "abc",
      required: true,
    },
    {
      for: "userPass",
      text: "Mật khẩu *",
      type: "password",
      placeholder: "abc",
      required: true,
    },
    {
      for: "confirmPassword",
      text: "Xác thực mật khẩu *",
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

      <div className="relative">
        <div className="flex h-full  bg-black min-h-screen bg-opacity-50">
          <div className="w-1/2 flex items-center pl-20">
            <AuthForm
              title="Đăng ký"
              fields={fields}
              layout=""
              isTickRequired={true}
              tickLabel="Chính sách bảo mật"
              links={[
                { text: "Bạn đã có tài khoản?", path: "/login" },
                { text: "Quên mật khẩu?", path: "/forgot-password" },
              ]}
              buttontitle="Đăng ký"
              onSubmit={handleRegister}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
