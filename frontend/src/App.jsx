import CreateUserPage from "./pages/user/user.create-user";
import LoginPage from "./pages/Login/Login-Page";
import RegisterPage from "./pages/Login/Register-Page";
import ForgotPasswordPage from "./pages/Login/Forgot-password-Page";
import VerifyCodePage from "./pages/Login/Verify-Code";
import ConfirmPasswordPage from "./pages/Login/Confirm-Passoword";
import Test from "./pages/Login/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-code" element={<VerifyCodePage />} />
        <Route path="/confirm-password" element={<ConfirmPasswordPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
