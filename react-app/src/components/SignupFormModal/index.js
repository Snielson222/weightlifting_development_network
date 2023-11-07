import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [name, setName] = useState("")
	const [experience, setExperience] = useState("")
	const { closeModal } = useModal();
	const [submitted, setSubmitted] = useState(false)
	const [e, setE] = useState({})

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password, experience, name));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	useEffect(() => {
		const obj = {}
			if (name.length < 6) {
				obj.name = "Name Must Be Over 6 Characters."
			}
			if (!email.includes('@') || !email.includes(".")) {
				obj.email = "Email Must Be Valid."
			}
			if (isNaN(experience) || experience < 0) {
				obj.experience = "Years of Workout Experience Must Be a Positive Number."
			}
			if (username.length < 6) {
				obj.username = "Username Must Be Over 6 Characters."
			}
			if (password.length < 6) {
				obj.password = "Password Must Be Over 6 Characters."
			}
			if (confirmPassword.length < 6) {
				obj.confirmPassword = "Confirm Password Must Be Over 6 Characters."
			}
			setE(obj)
	}, [name, email, experience, password, username, confirmPassword])

	return (
		<>
			<h1 className="centerMe">Sign Up</h1>
			<form onSubmit={handleSubmit}
			className="update-delete-form">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Name
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<p className="smallFont">{e.name}</p>
				<label>
					Years of Workout Experience
					</label>
					<input
						type="text"
						value={experience}
						onChange={(e) => setExperience(e.target.value)}
						required
					/>
					<p className="smallFont">{e.experience}</p>
				<label>
					Email
					</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<p className="smallFont">{e.email}</p>
				<label>
					Username
					</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<p className="smallFont">{e.username}</p>
				<label>
					Password
					</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<p className="smallFont">{e.password}</p>
				<label>
					Confirm Password
					</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					<p className="smallFont">{e.confirmPassword}</p>
				<button 
				className="fileCreate"
				disabled={Object.values(errors) > 0 || Object.values(e) > 0}
				onClick={() => setSubmitted(true)}
				type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;