import React, { useState } from "react";
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
				<label>
					Years of Workout Experience
					</label>
					<input
						type="text"
						value={experience}
						onChange={(e) => setExperience(e.target.value)}
						required
					/>
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
					Username
					</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
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
				<label>
					Confirm Password
					</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				<button 
				className="fileCreate"
				type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;