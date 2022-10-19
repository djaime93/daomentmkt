<script>
	import {
		connected,
		provider,
		chainId,
		chainData,
		signer,
		signerAddress,
		contracts
	} from 'svelte-ethers-store';
	import { defaultEvmStores } from 'svelte-ethers-store';

	/** @type {import('./$types').PageData} */
	export let data;

	$: ({ user, tableData } = data);

	const connectWallet = () => {
		defaultEvmStores.setProvider();
	};

	const collectRent = async (property) => {
		alert('Metamask popup -> collecting rent of token id: ' + property);
	};

	const collectAllRent = async () => {
		alert('Metamask popup -> collecting all rent from token ids: [1,2,3]');
	};

	let dollarUSLocale = Intl.NumberFormat('en-US');

	let reProperties = [
		{
			name: 'Property 1',
			tokenId: 0,
			stage: 'Under Construction',
			tokens: 3,
			value: 300_000,
			rentCollected: 281_515,
			rentPending: 281_515
		},
		{
			name: 'Property 2',
			tokenId: 1,
			stage: 'Funding',
			tokens: 4,
			value: 500_000,
			rentCollected: 481_515,
			rentPending: 281_515
		},
		{
			name: 'Property 3',
			tokenId: 2,
			stage: 'Sold',
			tokens: 5,
			value: 239_000,
			rentCollected: 220_515,
			rentPending: 281_515
		}
	];

	let test = dollarUSLocale.format(3000);

	let sumProperties = {
		tokens: reProperties.map((item) => item.tokens).reduce((prev, curr) => prev + curr, 0),
		value: reProperties.map((item) => item.value).reduce((prev, curr) => prev + curr, 0),
		rentCollected: reProperties
			.map((item) => item.rentCollected)
			.reduce((prev, curr) => prev + curr, 0),
		rentPending: reProperties.map((item) => item.rentPending).reduce((prev, curr) => prev + curr, 0)
	};
	// 	const res = Array.from(arr.reduce(
	//   (m, {name, value}) => m.set(name, (m.get(name) || 0) + value), new Map
	// ), ([name, value]) => ({name, value}));
	// console.log(res);

	let ongoingProperties = reProperties.filter((property) => property.stage !== 'Sold');
	let closedProperties = reProperties.filter((property) => property.stage == 'Sold');

	const style = {
		wrapper: ``,
		summaryContainer: ``,

		tableContainer: ``,
		headerContainer: ``,
		table: ``,

		collectRentButton: `p-2 text-white`
	};
</script>

<div class={style.wrapper}>
	<div class={style.summaryContainer}>Summary</div>

	<div class={style.tableContainer}>
		<table class={style.table}>
			<thead>
				<tr>
					<th>Name</th>
					<th>Stage</th>
					<th>Tokens</th>
					<th>Value</th>
					<th>Rent Collected</th>
					<th>Rent Pending</th>
					<th>Rent Due</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>all</td>
					<td>all</td>
					<td>{sumProperties.tokens}</td>
					<td>${dollarUSLocale.format(sumProperties.value)}</td>
					<td>${dollarUSLocale.format(sumProperties.rentCollected)}</td>
					<td>${dollarUSLocale.format(sumProperties.rentPending)}</td>
					<td>
						{#if $connected}
							<button
								on:click={collectAllRent}
								class={`${style.collectRentButton} bg-black`}
							>
								Collect Rent
							</button>
						{:else}
							<button on:click={connectWallet} class={`${style.collectRentButton} bg-gray-400`}>
								Collect Rent
							</button>
						{/if}
					</td>
				</tr>

				<tr>On Going</tr>
				{#each ongoingProperties as property}
					<tr>
						<td>{property.name}</td>
						<td>{property.stage}</td>
						<td>{property.tokens}</td>
						<td>${dollarUSLocale.format(property.value)}</td>
						<td>${dollarUSLocale.format(property.rentCollected)}</td>
						<td>${dollarUSLocale.format(property.rentPending)}</td>
						<td>
							{#if $connected}
								<button
									on:click={() => collectRent(property.tokenId)}
									class={`${style.collectRentButton} bg-black`}
								>
									Collect Rent
								</button>
							{:else}
								<button on:click={connectWallet} class={`${style.collectRentButton} bg-gray-400`}>
									Collect Rent
								</button>
							{/if}
						</td>
					</tr>
				{/each}

				<tr>Completed</tr>
				{#each closedProperties as property}
					<tr>
						<td>{property.name}</td>
						<td>{property.stage}</td>
						<td>{property.tokens}</td>
						<td>${dollarUSLocale.format(property.value)}</td>
						<td>${dollarUSLocale.format(property.rentCollected)}</td>
						<td>${dollarUSLocale.format(property.rentPending)}</td>
						<td>
							{#if $connected}
								<button
									on:click={() => collectRent(property.tokenId)}
									class={`${style.collectRentButton} bg-black`}
								>
									Collect Rent
								</button>
							{:else}
								<button on:click={connectWallet} class={`${style.collectRentButton} bg-gray-400`}>
									Collect Rent
								</button>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<!-- <div>Protected content for {user.email}</div>
<pre>{JSON.stringify(tableData, null, 2)}</pre>
<pre>{JSON.stringify(user.id, null, 2)}</pre> -->
