export const initialPetInfo = [
	{
		id: '1',
		name: 'Milo',
		age: 2,
		breed: 'pom',
		color: 'black',
	},
	{
		id: '2',
		name: 'Cookie',
		age: 4,
		breed: 'poodle',
		color: 'white',
	},
	{
		id: '3',
		name: 'Oreo',
		age: 3,
		breed: 'Shiba Inu',
		color: 'cream',
	},
];

export const columns = [
	{
		title: 'Id',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Breed',
		key: 'breed',
		dataIndex: 'breed',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Color',
		key: 'color',
		dataIndex: 'color',
	},
];
