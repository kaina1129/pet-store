import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import Tableview from './Tableview';
import { initialPetInfo, columns } from '../../constants/initialPetInfo';
import PetService from '../../services/pets';

const defaultProps = {
	columns: columns,
	data: initialPetInfo,
};

const emptyProps = {
	columns: columns,
	data: [],
};

window.alert = () => {};

describe('Tableview Component', () => {
	it('Should render Tableview component correctly', () => {
		const { getAllByRole, container } = render(<Tableview {...defaultProps} />);
		expect(container.firstChild).toHaveClass('table-view-container');

		expect(getAllByRole('columnheader')).toHaveLength(5);
		// 1 row is header + 3 rows are data
		expect(getAllByRole('row')).toHaveLength(4);
		expect(getAllByRole('cell')).toHaveLength(15);
	});

	it('Should render correctly when data is empty', () => {
		// mock axios response to be empty
		PetService.fetchAllPet = jest.fn(() => {
			axios.get.mockImplementationOnce(() => Promise.resolve([]));
		});
		const { getByText } = render(<Tableview {...emptyProps} />);

		expect(getByText('No Data')).toBeInTheDocument();
		expect(getByText('No Data')).toHaveClass('ant-empty-description');
	});

	it('Should display error message if fetch pets failed', () => {
		// mock axios response to be empty
		PetService.fetchAllPet = jest.fn(() => {
			axios.get.mockRejectedValueOnce(new Error('failed to fetch'));
		});
		const { getByText } = render(<Tableview {...emptyProps} />);
		expect(getByText('No Data')).toBeInTheDocument();
		expect(getByText('No Data')).toHaveClass('ant-empty-description');
	});
});
