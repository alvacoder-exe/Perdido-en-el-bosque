import { useState } from "react";
import "./Login.css"; // Import will be handled in main/root
import { loginUser } from "./config/endpoints.ts";
// import CreateAcc from "./Acc.tsx"; // Import will be handled in main/root

interface LoginProps {
  onLogin: () => void;
  onShowCreateAcc: () => void;
}

function Login({ onLogin, onShowCreateAcc }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser({ username, password });
      onLogin();
    } catch (err) {
      setError("Invalid username or password");
      console.error(err);
    } finally {
      setLoading(false);
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
                    disabled={loading}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
        </form>
        <button 
          onClick={onShowCreateAcc}
        >Create Account</button>
    </div>
  );}

export default Login;