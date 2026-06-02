import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  console.log("username =", username);
  console.log("password =", password);

  const success = login(
    username,
    password
  );

  console.log("success =", success);

  if (success) {
    navigate("/");
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
};

  return (
    <div className="login-overlay">
      <form className="login-modal" onSubmit={handleSubmit}>
        <div className="login-icon">🔒</div>

        <h2 className="login-title">Đăng nhập</h2>

        <label>Tên người dùng</label>

        <input
          type="text"
          placeholder="web virgil learner"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Mật khẩu</label>

        <input
          type="password"
          placeholder="123456"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">ĐĂNG NHẬP</button>
        <div className="login-links">
          <span>Quên mật khẩu?</span>

          <span>Chưa có tài khoản? Đăng ký</span>
        </div>
      </form>
    </div>
  );
}
