import React, { useState, useEffect } from 'react';

import { Table } from 'antd';

import PetService from '../../services/pets';

import './Tableview.scss';

const Tableview = ({ columns, data }) => {
	const [petsInfo, setPetsInfo] = useState({});

	useEffect(() => {
		const getAllPets = async () => {
			try {
				const result = await PetService.fetchAllPet();

				if (result.data) {
					setPetsInfo(result.data);
				} else {
					throw result.data.data;
				}
			} catch (error) {
				alert(error.message);
			}
		};

		getAllPets();
	}, []);

	return (
		<div className='table-view-container'>
			<Table
				petsInfo={petsInfo}
				columns={columns}
				dataSource={[...data]}
				rowKey='id'
			/>
		</div>
	);
};

export default Tableview;
