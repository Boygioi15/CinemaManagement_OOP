import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Forgot-password.style.css";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/user/request-password-reset", {
            identifier: username,
        });
        if (response.status === 200) {
            alert("Gửi mã xác minh thành công!");
            navigate("/verify-code", { state: { username } });
        }
    } catch (error) {
        console.error("Error response:", error.response);
        alert("Error: " + (error.response?.data?.msg || "An unexpected error occurred."));
    }   
};

  return (
    <div className="middle-forgot">
      <div className="ForgotPasswordPageRoot" style={{ behavior: "smooth" }}>
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
              Nhập địa chỉ email hoặc SĐT của bạn và chúng tôi sẽ gửi cho bạn mã
              code để tạo mật khẩu mới
            </p>
            <form onSubmit={handleClick}>
              <input
                type="text"
                placeholder="Email hoặc SĐT"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <div className="verify">
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
