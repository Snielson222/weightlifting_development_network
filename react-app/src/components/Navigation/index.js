import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo1 from './logo1.png'
import ExerciseButton from './ExerciseButton';


function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id="nav">
			<div id="logoNav">
				<NavLink exact to="/"><img src={logo1} alt='logo' id='logo'></img></NavLink>
				<div>

				<ExerciseButton />
				</div>
			<div className={sessionUser ? "" : "hidden"}>
				<NavLink  exact to="/user"><button className="fileCreate">User Page</button></NavLink>
			</div>
			</div>
			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;