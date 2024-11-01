import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-Page.style.css";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        identifier: username,
        password,
      });
      if (response.status === 200) {
        alert("Đăng nhập thành công!");
        navigate("/");
      }
    } catch (error) {
      alert("Đăng nhập thất bại: " + error.response.data.msg);
    }
  };
  
  return (
    <div className="middle">
      <div className="LoginPageRoot" style={{ behavior: "smooth" }}>
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
            <a href="#">
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
        <div className="login-container">
          <div className="login-box">
            <h2>Đăng nhập</h2>
            <label htmlFor="username">Tài khoản, Email hoặc số điện thoại *</label>
            <input
              id="username"
              type="text"
              placeholder="irsus123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Mật khẩu *</label>
            <input
              id="password"
              type="password"
              placeholder="abc"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="checkbox-container">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Lưu mật khẩu đăng nhập</label>
            </div>
            <div className="forgot-password">
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
            <button onClick={handleClick}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
