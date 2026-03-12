import { useState } from "react";
import "./Login.css"; // Import will be handled in main/root
// import CreateAcc from "./Acc.tsx"; // Import will be handled in main/root

interface LoginProps {
  onLogin: () => void;
  onShowCreateAcc: () => void;
}

function Login({ onLogin, onShowCreateAcc }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }   
  };
  return (
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
        </form>
        <button 
          onClick={onShowCreateAcc}
        >Create Account</button>
    </div>
  );}

export default Login;