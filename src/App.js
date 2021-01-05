import React, { useState } from 'react';

import Nav from './components/Nav/Nav.js';
import Tab from './components/Tab/Tab.js';
import Popup from './components/Popup/Popup.js';

import { initialPetInfo, columns } from './constants/initialPetInfo';

import './App.css';

import 'antd/dist/antd.css';

function App() {
	const [allPetsData, setAllPetsData] = useState({
		puppy: initialPetInfo,
		kitty: [],
	});
	const [currentPet, setCurrentPet] = useState('puppy');

	return (
		<div className='pet-store'>
			<Nav />
			<div className='pet-store-content'>
				<Popup
					allPetsData={allPetsData}
					columns={columns}
					setAllPetsData={setAllPetsData}
					currentPet={currentPet}
				/>
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
