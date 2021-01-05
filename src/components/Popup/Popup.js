import React, { useState } from 'react';
import { Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Button from '../Button/Button.js';
import PetInfoForm from '../PetInfoForm/PetInfoForm.js';

import './Popup.scss';

const Popup = ({ allPetsData, columns, setAllPetsData, currentPet }) => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		setVisible(!visible);
	};

	return (
		<div className='popup-container'>
			<Button onClick={toggleVisible}>
				Add New Pet <PlusOutlined />
			</Button>

			<Modal
				visible={visible}
				onOk={toggleVisible}
				onCancel={toggleVisible}
				footer={null}
			>
				<PetInfoForm
					allPetsData={allPetsData}
					setVisible={setVisible}
					setAllPetsData={setAllPetsData}
					currentPet={currentPet}
				/>
			</Modal>
		</div>
	);
};

export default Popup;
