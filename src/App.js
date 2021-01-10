import React, { useState } from 'react';

import Nav from './components/Nav/Nav.js';
import Tab from './components/Tab/Tab.js';
import Popup from './components/Popup/Popup.js';
import Button from './components/Button/Button.js';

import { initialPetInfo, columns } from './constants/initialPetInfo';

import './App.css';

import { PlusOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

function App() {
	const [allPetsData, setAllPetsData] = useState({
		puppy: initialPetInfo,
		kitty: [],
	});
	const [currentPet, setCurrentPet] = useState('puppy');
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		setVisible(!visible);
	};

	return (
		<div className='pet-store'>
			<Nav />
			<div className='pet-store-content'>
				<Button onClick={toggleVisible}>
					Add New Pet <PlusOutlined />
				</Button>
				{visible && (
					<Popup
						allPetsData={allPetsData}
						columns={columns}
						setAllPetsData={setAllPetsData}
						currentPet={currentPet}
						visible={visible}
						setVisible={setVisible}
						toggleVisible={toggleVisible}
					/>
				)}
				<Tab
					allPetsData={allPetsData}
					setAllPetsData={setAllPetsData}
					columns={columns}
					setCurrentPet={setCurrentPet}
				/>
			</div>
		</div>
	);
}

export default App;
