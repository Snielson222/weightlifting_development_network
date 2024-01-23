import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  async function demoUser() {
    setEmail('demo@aa.io')
    setPassword('password')
    await dispatch(login(email, password));
    return closeModal()
  }

  return (
    <>
      <h1 className="centerMe">Log In</h1>
      <form onSubmit={handleSubmit}
      className="update-delete-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label>
          Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button 
        className="fileCreate"
        type="submit">Log In</button>
        <button 
        className="fileCreate"
        onClick={demoUser}>Demo User Login</button>
      </form>
    </>
  );
}

export default LoginFormModal;
