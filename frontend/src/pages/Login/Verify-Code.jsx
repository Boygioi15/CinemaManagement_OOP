import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verify-Code.style.css";

function VerifyCodePage() {
  const navigate = useNavigate();
  return (
    <div className="middle-verify">
      <div className="VerifyCodePageRoot" style={{ behavior: "smooth" }}>
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
              Chúng tôi đã gửi cho bạn mã OTP thông qua Email hoặc SĐT, hãy kiểm
              tra thông tin và nhập mã
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target[0].value) {
                  navigate("/confirm-password");
                }
              }}
            >
              <input type="text" placeholder="Mã OTP" required />
              <br />
              <div class="verify">
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
