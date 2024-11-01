import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Confirm-Password.style.css";

function ConfirmPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username || "";

  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
    } else if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/user/reset-password", {
          identifier: username,
          newPassword: confirmPassword,
        });
        if (response.status === 200) {
          alert("Đặt lại mật khẩu thành công!");
          navigate("/");
        }
      } catch (error) {
        alert("Error: " + error.response?.data?.msg);
      }
    }
  };
  
  return (
    <div className="middle-confirm">
      <div className="ConfirmPasswordPageRoot" style={{ behavior: "smooth" }}>
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
              <img
                alt="search"
                height="24"
                width="24"
                src="/Images/search.png"
              />
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
            <h1>ĐẶT LẠI MẬT KHẨU MỚI</h1>
            <p>Vui lòng nhập mật khẩu mới</p>
            <form onSubmit={handleClick}>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <input
                type="password"
                placeholder="Mật khẩu mới"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />

              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <br />
              <div className="verify">
                <button type="submit">XÁC NHẬN MẬT KHẨU</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPasswordPage;
