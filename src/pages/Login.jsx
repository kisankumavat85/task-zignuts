import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../contexts/auth-context";
import { login } from "../services/auth.services";
import { encryptData } from "../utils/bcrypt-utils";
import { setItem } from "../utils/local-storage.utils";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);

    if (result) {
      setUser(result);
      const encryptedPassword = encryptData(result);
      setItem("password", encryptedPassword);
      return navigate("/");
    }

    return alert("Please enter valid data");
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="conatiner">
      <div className="form-conatiner">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="heading">Login</h3>
          <div className="email-conatiner">
            <label htmlFor="email">Email</label>
            <input
              className="email-input"
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="password-conatiner">
            <label htmlFor="password">Password</label>
            <input
              className="password-input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="button-container">
            <input className="button-input" type="submit" value="Login" />
            <input
              className="button-input"
              type="reset"
              value="Clear"
              onClick={handleReset}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
