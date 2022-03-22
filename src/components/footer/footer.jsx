import React from 'react';
import './footer.css';
import { capitalizeFirstLetter } from '../../utils';


const Footer = () => {
	
	return (
		<footer>
			<p>pour les passionné(e)s de plantes</p>
			<p>laissez nous votre email:</p>
			<input type="email" placeholder={capitalizeFirstLetter('entrez votre mail')} />
		</footer>
	)
}

export default Footer;