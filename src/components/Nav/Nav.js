import React from 'react';

import NavbarLogo from '../../assets/pets-icon.svg';

import './Nav.scss';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='icon'>
				<img src={NavbarLogo} alt='pet icon' />
			</div>
			<h1>Pet Store</h1>
			
		</div>
	);
};

export default Nav;
