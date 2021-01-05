import React, { useRef } from 'react';
import { Form, Input } from 'antd';

import Button from '../Button/Button.js';
import PetService from '../../services/pets';

import './PetInfoForm.scss';

const formData = [
	{
		name: 'name',
		label: 'Name',
	},
	{
		name: 'color',
		label: 'Color',
	},
	{
		name: 'age',
		label: 'Age',
	},
	{
		name: 'breed',
		label: 'Breed',
	},
];

const layout = {
	labelCol: {
		span: 4,
	},
	wrapperCol: {
		span: 16,
	},
};

const PetInfoForm = ({
	setVisible,
	allPetsData,
	setAllPetsData,
	currentPet,
}) => {
	const validateMessages = {
		/* eslint-disable */
		required: '${label} is required!',
		types: {
			number: '${label} is not a valid number!',
		},
		/* eslint-disable */
	};
	const formRef = useRef(null);

	const onFinish = async (values) => {
		const newPets = { ...allPetsData };
		values['id'] = (newPets[currentPet].length + 1).toString();
		try {
			const result = await PetService.createPet(values);

			if (result.status === 201) {
				newPets[currentPet].push(values);
				setVisible(false);
				formRef.current.resetFields();
				setAllPetsData(newPets);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='pet-info-form'>
			<h2>Pet Info Form</h2>
			<Form
				{...layout}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}
				ref={formRef}
				onClick={() => {
					!formRef.current && formRef.current.focus();
				}}
			>
				{formData.map((item) => (
					<Form.Item
						name={item.name}
						label={item.label}
						rules={[
							{
								required: true,
							},
						]}
						key={item.name}
					>
						<Input />
					</Form.Item>
				))}
				<div className='button-container'>
					<Button onClick={onFinish}>Submit</Button>
				</div>
			</Form>
		</div>
	);
};

export default PetInfoForm;
