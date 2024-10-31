import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Confirm-Password.style.css";

function ConfirmPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
    } else if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
    } else {
      setError("");
      // Navigate to the success page after password is successfully reset
      navigate("/password-reset-success");
    }
  };
  return (
    <div className="middle-confirm">
      <div className="ConfirmPasswordPageRoot" style={{ behavior: "smooth" }}>
        <div class="header">
          <div class="logo-container">
            <img alt="Cinestar Logo" height="40" src="/Images/logo.svg" />
            <span className="logo-text">FilmNest</span>
          </div>
          <div class="nav-links">
            <a href="#">Chọn rạp</a>
            <a href="#">Lịch chiếu</a>
            <a class="btn btn-yellow" href="#">
              Đặt vé ngay
            </a>
            <a class="btn btn-purple" href="#">
              Đặt bắp nước
            </a>
          </div>
          <div class="search-bar">
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
          <div class="additional-links">
            <a onClick={() => navigate("/")}>
              <i class="fas fa-user"></i>
              Đăng nhập
            </a>
            <a href="#">
              <i class="fas fa-globe"></i>
              VN
            </a>
          </div>
        </div>
        <div class="sub-header">
          <div class="additional-links">
            <a href="#">Khuyến mãi</a>
            <a href="#">Thuê sự kiện</a>
            <a href="#">Tất cả giải trí</a>
            <a href="#">Giới thiệu</a>
          </div>
        </div>
        <div class="forgot-container">
          <div class="forgot-box">
            <h1>ĐẶT LẠI MẬT KHẨU MỚI</h1>
            <p>Vui lòng nhập mật khẩu mới</p>
            <form onSubmit={handleSubmit}>
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
              <div class="verify">
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
