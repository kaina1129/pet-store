import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const defaultProps = {
	onClick: jest.fn(),
};

describe('test Button component', () => {
	it('should render the correct default button', () => {
		render(<Button {...defaultProps}>Test</Button>);
		const element = screen.getByRole('button', { name: /Test/i });
		expect(element).toBeInTheDocument();
		expect(element.tagName).toEqual('BUTTON');
		expect(element).toHaveClass('pet-store-btn');
		userEvent.click(element);
		expect(defaultProps.onClick).toHaveBeenCalled();
	});

	
});
