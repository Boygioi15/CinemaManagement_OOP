import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header bg-blue-900 p-2.5 flex items-center justify-between relative z-10">
        {/* Logo và Lịch chiếu */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              alt="Cinestar Logo"
              height="40"
              src="/Images/logo.svg"
              className="h-8"
            />
            <span className="text-white text-lg font-bold">Nhóm 22</span>
          </div>
          {/* Lịch chiếu */}
          <div>
            <a
              href="#"
              className="text-white text-sm flex items-center space-x-1 hover:underline"
            >
              <img
                alt="search"
                src="/Images/calendar.svg"
                className="h-5 w-5"
              />
              <span>Lịch chiếu</span>
            </a>
          </div>
        </div>

        {/* Search bar và Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="search-bar flex items-center bg-white rounded-full px-2 h-10 w-72">
            {/* Input */}
            <input
              placeholder="Tìm phim"
              type="text"
              className="flex-grow outline-none text-xs text-gray-800 placeholder-gray-400 px-2"
            />
            {/* Button với ảnh kính lúp */}
            <button className="bg-transparent border-none flex items-center justify-center p-1">
              <img alt="search" src="/Images/search.svg" className="h-4 w-4" />
            </button>
          </div>

          {/* Additional Links */}
          <div className="additional-links flex items-center space-x-6">
            <a
              href="/login"
              className="text-white text-sm flex items-center space-x-1 hover:underline"
            >
              <img
                alt="user"
                src="/Images/account icon.svg"
                className="h-5 w-5"
              />
              <span>Đăng nhập</span>
            </a>
            <a
              href="#"
              className="text-white text-sm flex items-center space-x-1 hover:underline"
            >
              <img alt="help" src="/Images/question.png" className="h-6 w-6" />
              <span>Trợ giúp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
