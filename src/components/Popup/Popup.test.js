import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popup from './Popup';

const defaultProps = {
	onClick: jest.fn(),
};

describe('Popup component', () => {
	it('should render Popup component correctly', () => {
		const { container } = render(<Popup {...defaultProps} />);
		expect(container).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('popup-container');

		userEvent.click(container);
	});
});
