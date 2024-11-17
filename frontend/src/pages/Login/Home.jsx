import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./../../components/footer";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
