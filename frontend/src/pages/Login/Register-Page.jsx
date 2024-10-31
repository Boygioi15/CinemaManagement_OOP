import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register-Page.style.css";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="middle">
      <div className="RegisterPageRoot" style={{ behavior: "smooth" }}>
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
        <div class="container">
          <div class="register-box">
            <h2>Đăng Ký</h2>
            <form>
              <div class="form-group">
                <label for="name">Họ và tên *</label>
                <input type="text" id="name" placeholder="Họ và tên" required />
              </div>
              <div class="form-group">
                <label for="dob">Ngày sinh *</label>
                <input type="text" id="dob" placeholder="dd/mm/yyyy" required />
              </div>
              <div class="form-group">
                <label for="phone">Số điện thoại *</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Số điện thoại"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Điền email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Mật khẩu *</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Mật khẩu"
                  required
                />
              </div>
              <div class="form-group">
                <label for="confirm-password">Xác thực mật khẩu *</label>

                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Xác thực mật khẩu"
                  required
                />
              </div>
              <div class="form-group policy">
                <a href="#">Chính sách bảo mật</a>
              </div>
              <div class="form-group checkbox">
                <input type="checkbox" id="terms" />
                <label for="terms">
                  Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên
                  Cinestar
                </label>
              </div>
              <div class="form-group">
                <button type="submit" class="submit-btn">
                  ĐĂNG KÝ
                </button>
              </div>
              <div className="login-link">
                <span style={{ color: "black" }}>Bạn đã có tài khoản? </span>
                <a
                  onClick={() => navigate("/")}
                  //   onMouseOver={(e) => (e.currentTarget.style.color = "purple")}
                  //   onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
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
