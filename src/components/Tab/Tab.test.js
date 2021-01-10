import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tab from './Tab';
import { initialPetInfo, columns } from '../../constants/initialPetInfo';

jest.mock('../Tableview/Tableview', () => {
	return () => {
		return <div>table content</div>;
	};
});

const defaultProps = {
	allPetsData: {
		puppy: initialPetInfo,
		kitty: [],
	},
	setAllPetsData: jest.fn(),
	columns: columns,
	setCurrentPet: jest.fn(),
};

describe('Tab Component', () => {
	it('Should render Tab component with tabs correctly', () => {
		const { getByRole, getByText, container } = render(
			<Tab {...defaultProps} />,
		);
		expect(container.firstChild).toHaveClass('tab-container');

		expect(getByRole('tab', { name: /Puppy/i })).toBeInTheDocument();
		expect(getByRole('tab', { name: /Kitty/i })).toBeInTheDocument();
		expect(getByRole('tab', { name: /Puppy/i }).parentNode).toHaveClass(
			'ant-tabs-tab-active',
		);
		expect(getByText('table content')).toBeInTheDocument();

		// switch tab
		userEvent.click(getByRole('tab', { name: /Kitty/i }));
		expect(getByRole('tab', { name: /Kitty/i }).parentNode).toHaveClass(
			'ant-tabs-tab-active',
		);
	});

	it('Should display modal when click on "+" icon', () => {
		const { getByRole, queryByRole } = render(<Tab {...defaultProps} />);
		const plusIcon = getByRole('img', /plus-circle/i);

		// click plus icon to trigger "Enter New Tab" modal
		userEvent.click(plusIcon);
		expect(getByRole('document')).toHaveClass('ant-modal');
		expect(getByRole('heading', /Enter Tab Name/i)).toBeInTheDocument();

		// click close modal
		const closeModalBtn = getByRole('document').getElementsByClassName(
			'ant-modal-close',
		)[0];
		expect(closeModalBtn).toBeInTheDocument();
		userEvent.click(closeModalBtn);

		expect(queryByRole('heading', /Enter Tab Name/i)).not.toBeInTheDocument();
	});
});
