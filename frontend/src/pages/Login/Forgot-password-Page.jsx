import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forgot-password.style.css";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <div className="middle-forgot">
      <div className="ForgotPasswordPageRoot" style={{ behavior: "smooth" }}>
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
            <h1>QUÊN MẬT KHẨU</h1>
            <p>
              Nhập địa chỉ email hoặc SĐT của bạn và chúng tôi sẽ gửi cho bạn mã
              code để tạo mật khẩu mới
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target[0].value) {
                  navigate("/verify-code");
                }
              }}
            >
              <input type="text" placeholder="Email hoặc SĐT" required />
              <br />
              <div class="verify">
                <button type="submit">GỬI MÃ XÁC MINH</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
