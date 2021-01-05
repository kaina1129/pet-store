import React from 'react';

import './Button.scss';

const Button = (props) => {
	const { children, onClick } = props;

	return (
		<button className='pet-store-btn' onClick={onClick}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
