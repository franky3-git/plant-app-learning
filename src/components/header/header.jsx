import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { capitalizeFirstLetter } from '../../utils';

const Header = () => {
	const title = 'la maison jungle';
	
	return (
		<header>
			<img className="logo" src={logo} alt="logo app" />
			<h1>{capitalizeFirstLetter(title)}</h1>
		</header>
	)
}

export default Header;