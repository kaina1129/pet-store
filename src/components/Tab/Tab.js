import React, { useState } from 'react';
import { Tabs, Modal, Input } from 'antd';
import Tableview from '../Tableview/Tableview.js';
import Button from '../Button/Button.js';

import { PlusCircleOutlined } from '@ant-design/icons';

import './Tab.scss';

const { TabPane } = Tabs;

const initialTab = [
	{
		key: 'puppy',
		title: 'Puppy',
	},
	{
		key: 'kitty',
		title: 'Kitty',
	},
];
const Tab = ({ allPetsData, setAllPetsData, columns, setCurrentPet }) => {
	const [visible, setVisible] = useState(false);
	const [tabs, setTabs] = useState(initialTab);
	const [value, setValue] = useState('');

	const toggleVisible = () => {
		setVisible(!visible);
	};
	const addTab = () => {
		const newPanes = [...tabs];
		const newPets = { ...allPetsData };
		newPanes.push({
			title: value.charAt(0).toUpperCase() + value.slice(1),
			key: value,
		});
		newPets[value] = [];
		setAllPetsData(newPets);
		setTabs(newPanes);
		setVisible(false);
	};

	return (
		<div className='tab-container'>
			<Tabs type='card' onChange={(key) => setCurrentPet(key)}>
				{tabs.map((v, i) => (
					<TabPane tab={v.title} key={v.key}>
						<Tableview data={allPetsData[v.key]} columns={columns} />
					</TabPane>
				))}
			</Tabs>
			<div className='add-tab' onClick={() => setVisible(true)}>
				<PlusCircleOutlined />
			</div>
			<Modal
				visible={visible}
				onOk={toggleVisible}
				onCancel={toggleVisible}
				footer={null}
			>
				<h3>Enter Tab Name</h3>
				<Input onChange={(e) => setValue(e.target.value)} />
				<Button onClick={addTab}>Submit</Button>
			</Modal>
		</div>
	);
};

export default Tab;
