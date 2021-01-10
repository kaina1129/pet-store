import React from 'react';
import { Modal } from 'antd';

import PetInfoForm from '../PetInfoForm/PetInfoForm.js';

import './Popup.scss';

const Popup = ({
	allPetsData,
	columns,
	setAllPetsData,
	currentPet,
	visible,
	setVisible,
	toggleVisible,
}) => {
	return (
		<div className='popup-container'>
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
