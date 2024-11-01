import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register-Page.style.css";
import axios from "axios";

function RegisterPage() {
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    userGender: true,
    userBirth: "",
    userEmail: "",
    userPhone: "",
    userPass: "",
    confirmPassword: "",
    terms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.userPass !== formData.confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user/create-user", {
        userId: formData.userId,
        userName: formData.userName,
        userGender: formData.userGender,
        userBirth: formData.userBirth,
        userEmail: formData.userEmail,
        userPhone: formData.userPhone,
        userPass: formData.userPass,
        otp: null, 
        otpExpiration: null, 
        verificationCode: null,
      });

      // Xử lý phản hồi từ backend
      if (response.status === 200) {
        alert("Đăng ký thành công!");
        navigate("/"); // Chuyển hướng đến trang đăng nhập
      }
    } catch (error) {
      alert("Đăng ký thất bại: " + error.response.data.message);
    }
  };

  return (
    <div className="middle">
      <div className="RegisterPageRoot" style={{ behavior: "smooth" }}>
        <div className="header">
          {/* Header content */}
        </div>
        <div className="container">
          <div className="register-box">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userId">ID người dùng *</label>
                <input
                  type="text"
                  id="userId"
                  placeholder="ID người dùng"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Họ và tên *</label>
                <input
                  type="text"
                  id="userName"
                  placeholder="Họ và tên"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userGender">Giới tính *</label>
                <select
                  id="userGender"
                  value={formData.userGender}
                  onChange={(e) => setFormData({ ...formData, userGender: e.target.value === "true" })}
                  required
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="userBirth">Ngày sinh *</label>
                <input
                  type="date"
                  id="userBirth"
                  value={formData.userBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userPhone">Số điện thoại *</label>
                <input
                  type="text"
                  id="userPhone"
                  placeholder="Số điện thoại"
                  value={formData.userPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Email *</label>
                <input
                  type="email"
                  id="userEmail"
                  placeholder="Điền email"
                  value={formData.userEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userPass">Mật khẩu *</label>
                <input
                  type="password"
                  id="userPass"
                  placeholder="Mật khẩu"
                  value={formData.userPass}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Xác thực mật khẩu *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Xác thực mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group policy">
                <a href="#">Chính sách bảo mật</a>
              </div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="terms">
                  Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên
                  Cinestar
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="submit-btn">
                  ĐĂNG KÝ
                </button>
              </div>
              <div className="login-link">
                <span style={{ color: "black" }}>Bạn đã có tài khoản? </span>
                <a onClick={() => navigate("/")}>
                  Đăng nhập
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
