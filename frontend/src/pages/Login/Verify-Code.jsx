import React, { useState } from "react";
import axios from "axios";
import "./Verify-Code.style.css";
import { useNavigate, useLocation } from "react-router-dom";

function VerifyCodePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [verifyCode, setVerifyCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const username = location.state?.username || "";

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/verify-code", {
        identifier: username,
        verificationCode: verifyCode,
        newPassword: newPassword,
      });
      if (response.status === 200) {
        alert("Xác minh thành công!");
        navigate("/confirm-password", { state: { username } });
      }
    } catch (error) {
      alert("Error: " + error.response?.data?.msg);
    }
  };

  return (
    <div className="middle-verify">
      <div className="VerifyCodePageRoot" style={{ behavior: "smooth" }}>
        <div className="header">
          <div className="logo-container">
            <img alt="Cinestar Logo" height="40" src="/Images/logo.svg" />
            <span className="logo-text">FilmNest</span>
          </div>
          <div className="nav-links">
            <a href="#">Chọn rạp</a>
            <a href="#">Lịch chiếu</a>
            <a className="btn btn-yellow" href="#">
              Đặt vé ngay
            </a>
            <a className="btn btn-purple" href="#">
              Đặt bắp nước
            </a>
          </div>
          <div className="search-bar">
            <input placeholder="Tìm phim, rạp" type="text" />
            <button>
              <img alt="search" height="24" width="24" src="/Images/search.png" />
            </button>
          </div>
          <div className="additional-links">
            <a onClick={() => navigate("/")}>
              <i className="fas fa-user"></i>
              Đăng nhập
            </a>
            <a href="#">
              <i className="fas fa-globe"></i>
              VN
            </a>
          </div>
        </div>
        <div className="sub-header">
          <div className="additional-links">
            <a href="#">Khuyến mãi</a>
            <a href="#">Thuê sự kiện</a>
            <a href="#">Tất cả giải trí</a>
            <a href="#">Giới thiệu</a>
          </div>
        </div>
        <div className="forgot-container">
          <div className="forgot-box">
            <h1>QUÊN MẬT KHẨU</h1>
            <p>
              Chúng tôi đã gửi cho bạn mã OTP thông qua Email hoặc SĐT, hãy kiểm tra thông tin và nhập mã
            </p>
            <form onSubmit={handleClick}>
              <input
                type="text"
                placeholder="Mã OTP"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                hidden
              />
              <br />
              <div className="verify">
                <button type="submit">XÁC NHẬN MÃ OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyCodePage;
