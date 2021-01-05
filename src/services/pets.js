import axios from 'axios';
import apiUrl from '../constants/api';

const fetchAllPet = () => {
	return axios.get(`${apiUrl}/pets`);
};

const getPetInfoById = (petId) => {
	return axios.get(`${apiUrl}/pets`, {
		params: {
			petId,
		},
	});
};

const createPet = (data) => {
	return axios.post(`${apiUrl}/pets`, data);
};

const PetService = {
	fetchAllPet,
	getPetInfoById,
	createPet,
};

export default PetService;
