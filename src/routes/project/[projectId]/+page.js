export const load = ({ fetch, params }) => {
	// console.log(params);

	const data = [
		{
			name: 'Project 1',
			visible: true,
			id: 1,
			address: 'Mezquite #114, Cd Gral Escobedo, NL, Mexico',
			asset_type: 'Industrial',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum molestie ante eget pulvinar. Nam ultrices, tellus in hendrerit blandit, ante justo viverra lectus, non scelerisque risus odio ac nulla. Sed eu elit convallis dui sollicitudin tristique. Donec ultricies sit amet elit at rhoncus. In bibendum sodales mi, in pellentesque dui scelerisque nec. Mauris vel leo non dui faucibus egestas vitae nec ante. Aenean sem nulla, condimentum quis scelerisque eu, congue et ipsum. Cras condimentum dui ac orci vehicula pellentesque. Curabitur egestas euismod nunc. Quisque at quam nisl. Quisque mollis in turpis sit amet laoreet. Praesent sollicitudin tristique sapien, at.',
			location_summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac porta dui. Nulla nec tortor sodales, lacinia tortor at, commodo nulla. Donec sit amet arcu congue, bibendum est eu, tempor arcu. Quisque turpis urna, sollicitudin quis est et, convallis facilisis libero. Aliquam non dui egestas, dictum sem a, iaculis quam.',
			price: 20000000,
			land_area: 10000,
			leasable_area: 5678,
			parking_spots: 150,
			occupancy: 95,
			tenants: 3,
			walt: 4.3,
			contract_type: 'NNN',
			expected_monthly: 1717,
			expected_yearly_return: 10.2,
			percentage_of_property_tokenized: 100,
			total_tokens_available: 99,
			price_per_token: 202020,
			image_url:
				'https://media.istockphoto.com/photos/industrial-building-against-the-blue-sky-factory-picture-id1166857000?k=20&m=1166857000&s=612x612&w=0&h=jse-w2yRMcq7dCIW6Eqpe6Z88OKDOebEb79Rqe5YUb0=',
			site_images: [
				'https://media.istockphoto.com/photos/industrial-building-against-the-blue-sky-factory-picture-id1166857000?k=20&m=1166857000&s=612x612&w=0&h=jse-w2yRMcq7dCIW6Eqpe6Z88OKDOebEb79Rqe5YUb0=',
				'https://media.istockphoto.com/photos/industrial-building-against-the-blue-sky-factory-picture-id1166857000?k=20&m=1166857000&s=612x612&w=0&h=jse-w2yRMcq7dCIW6Eqpe6Z88OKDOebEb79Rqe5YUb0='
			],
			google_maps_location: 'https://goo.gl/maps/ZdECvzAnqvcJsJTx5',
			site_plans: ['', ''],
			token_contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
			token_abi: 'abi of the contract here',
			token_function: 'function of token 1 for project 1'
		},
		{
			name: 'Project 2',
			visible: true,
			id: 2,
			address: 'Alfonso Reyes #114, Cd Gral Escobedo, NL, Mexico',
			asset_type: 'Industrial',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum molestie ante eget pulvinar. Nam ultrices, tellus in hendrerit blandit, ante justo viverra lectus, non scelerisque risus odio ac nulla. Sed eu elit convallis dui sollicitudin tristique. Donec ultricies sit amet elit at rhoncus. In bibendum sodales mi, in pellentesque dui scelerisque nec. Mauris vel leo non dui faucibus egestas vitae nec ante. Aenean sem nulla, condimentum quis scelerisque eu, congue et ipsum. Cras condimentum dui ac orci vehicula pellentesque. Curabitur egestas euismod nunc. Quisque at quam nisl. Quisque mollis in turpis sit amet laoreet. Praesent sollicitudin tristique sapien, at.',
			location_summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac porta dui. Nulla nec tortor sodales, lacinia tortor at, commodo nulla. Donec sit amet arcu congue, bibendum est eu, tempor arcu. Quisque turpis urna, sollicitudin quis est et, convallis facilisis libero. Aliquam non dui egestas, dictum sem a, iaculis quam.',
			price: 30000000,
			land_area: 20000,
			leasable_area: 6078,
			parking_spots: 200,
			occupancy: 101,
			tenants: 4,
			walt: 4.7,
			contract_type: 'NNN',
			expected_monthly: 2010,
			expected_yearly_return: 11.2,
			percentage_of_property_tokenized: 100,
			total_tokens_available: 99,
			price_per_token: 242000,
			image_url:
				'https://image.shutterstock.com/image-photo/loading-doors-warehouse-260nw-1696569361.jpg',
			site_images: [
				'https://image.shutterstock.com/image-photo/loading-doors-warehouse-260nw-1696569361.jpg',
				'https://image.shutterstock.com/image-photo/loading-doors-warehouse-260nw-1696569361.jpg'
			],
			google_maps_location: 'https://goo.gl/maps/ZdECvzAnqvcJsJTx5',
			site_plans: ['', ''],
			token_contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
			token_abi: 'abi of the contract here',
			token_function: 'function of token 2 for project 2'
		},
		{
			name: 'Project 3',
			visible: true,
			id: 3,
			address: 'Gomez Morin #300, Apodaca, NL, Mexico',
			asset_type: 'Industrial',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum molestie ante eget pulvinar. Nam ultrices, tellus in hendrerit blandit, ante justo viverra lectus, non scelerisque risus odio ac nulla. Sed eu elit convallis dui sollicitudin tristique. Donec ultricies sit amet elit at rhoncus. In bibendum sodales mi, in pellentesque dui scelerisque nec. Mauris vel leo non dui faucibus egestas vitae nec ante. Aenean sem nulla, condimentum quis scelerisque eu, congue et ipsum. Cras condimentum dui ac orci vehicula pellentesque. Curabitur egestas euismod nunc. Quisque at quam nisl. Quisque mollis in turpis sit amet laoreet. Praesent sollicitudin tristique sapien, at.',
			location_summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac porta dui. Nulla nec tortor sodales, lacinia tortor at, commodo nulla. Donec sit amet arcu congue, bibendum est eu, tempor arcu. Quisque turpis urna, sollicitudin quis est et, convallis facilisis libero. Aliquam non dui egestas, dictum sem a, iaculis quam.',
			price: 27000000,
			land_area: 16000,
			leasable_area: 5478,
			parking_spots: 210,
			occupancy: 193,
			tenants: 2,
			walt: 1.7,
			contract_type: 'NNN',
			expected_monthly: 3010,
			expected_yearly_return: 21.2,
			percentage_of_property_tokenized: 100,
			total_tokens_available: 99,
			price_per_token: 102000,
			image_url: 'https://pbs.twimg.com/media/D8JRWpsX4AYk8sK.jpg',
			site_images: [
				'https://pbs.twimg.com/media/D8JRWpsX4AYk8sK.jpg',
				'https://pbs.twimg.com/media/D8JRWpsX4AYk8sK.jpg'
			],
			google_maps_location: 'https://goo.gl/maps/ZdECvzAnqvcJsJTx5',
			site_plans: ['', ''],
			token_contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
			token_abi: 'abi of the contract here',
			token_function: 'function of token 3 for project 3'
		}
	];

	const fetchProject = async (id) => {
		// const res = await fetch(`https://dummyjson.com/products/${id}`);
		// const data = await res.json();
		return data[id - 1];
	};

	return {
		project: fetchProject(params.projectId)
	};
};
