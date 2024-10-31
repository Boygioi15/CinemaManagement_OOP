import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-Page.style.css";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="middle">
      <div className="LoginPageRoot" style={{ behavior: "smooth" }}>
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
            <a href="#">
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
        <div class="login-container">
          <div class="login-box">
            <h2>Đăng nhập</h2>
            <label for="username">Tài khoản, Email hoặc số điện thoại *</label>
            <input id="username" type="text" placeholder="irsus123" />
            <label for="password">Mật khẩu *</label>
            <input id="password" type="password" placeholder="abc" />
            <div class="checkbox-container">
              <input id="remember" type="checkbox" />
              <label for="remember">Lưu mật khẩu đăng nhập</label>
            </div>
            <div class="forgot-password">
              <a
                onMouseOver={(e) => (e.currentTarget.style.color = "purple")}
                onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                onClick={() => navigate("/register")}
              >
                Đăng ký
              </a>
              <a
                onMouseOver={(e) => (e.currentTarget.style.color = "purple")}
                onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                onClick={() => navigate("/forgot-password")}
              >
                Quên mật khẩu?
              </a>
            </div>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
