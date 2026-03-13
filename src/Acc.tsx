import { useState } from "react";
import "./Acc.css"; // Import will be handled in main/root
import { postUsers } from "./config/endpoints.ts";

/*crear cuenta para ingresar al juego*/

interface CreateAccProps {
  onCreateAcc: () => void;
}

const CreateAcc: React.FC<CreateAccProps> = ({ onCreateAcc }) => {
    /** Aquí puedes agregar la lógica para manejar la creación de la cuenta, como validar los campos y enviar los datos a tu backend. */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            await postUsers({
                username,
                password,
            });
            setSuccess("Account created successfully!");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                onCreateAcc();
            }, 1500);
        } catch (err) {
            setError("Error creating account. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="create-acc-container">
            <h2>Create Account</h2>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
        </div>
    );
};

export default CreateAcc;