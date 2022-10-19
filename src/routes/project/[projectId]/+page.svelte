<script>
	import { page } from '$app/stores';
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
	
	export let data;

	const { project } = data;

	const mintToken = () => {
		alert('mint');
	};

	const connectWallet = () => {
		defaultEvmStores.setProvider();
	};

	const style = {
		gridStyling: `grid md:grid-cols-2`,
		infoCard: `p-2 m-2 rounded-md bg-white border border-gray-100`,
		lineItem: `flex flex-cols w-full`,
		propertyReference: `w-full flex flex-cols`,
		propertyInfo: `flex justify-end w-1/2 text-right`,
		button: `p-4 rounded-lg flex items-center justify-center bg-[#D1EFCB]`,
		disabledButton: `p-4 rounded-lg flex items-center justify-center bg-gray-200`,
		headings: `px-2 m-2 text-[#92a78e] font-semibold text-xl`,
		link: ``
	};
</script>

<div class={style.gridStyling}>
	<div>
		<div class={style.lineItem}>
			<div class={style.headings}>{project.name}</div>
			<div>
				<a class={style.link} href={project.google_maps_location} target="_blank">Google maps</a>
			</div>
		</div>

		<div class={style.infoCard}>
			<div>
				<img src={project.image_url} alt="" />
			</div>
			<div class={style.lineItem}>
				{#each project.site_images as image}
					<img src={image} alt="" height="40" width="40" />
				{/each}
			</div>
		</div>
	</div>

	<div>
		<div class={style.headings}>General Property Information</div>
		<div class={style.infoCard}>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Asset Type</div>
				<div class={style.propertyInfo}>{project.asset_type}</div>
			</div>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Price</div>
				<div class={style.propertyInfo}>{project.price}</div>
			</div>

			<div class={style.lineItem}>
				<div class={style.propertyReference}>Land Area</div>
				<div class={style.propertyInfo}>{project.land_area}</div>
			</div>

			<div class={style.lineItem}>
				<div class={style.propertyReference}>Leasable Area</div>
				<div class={style.propertyInfo}>{project.leasable_area}</div>
			</div>

			<div class={style.lineItem}>
				<div class={style.propertyReference}>Parking Spots</div>
				<div class={style.propertyInfo}>{project.parking_spots}</div>
			</div>

			<div class={style.lineItem}>
				<div class={style.propertyReference}>Occupancy</div>
				<div class={style.propertyInfo}>{project.occupancy}</div>
			</div>

			<div class={style.lineItem}>
				<div class={style.propertyReference}>Address</div>
				<div class={style.propertyInfo}>{project.address}</div>
			</div>
		</div>

		<div class={style.headings}>Tenant Information</div>
		<div class={style.infoCard}>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Tennants</div>
				<div class={style.propertyInfo}>{project.tenants}</div>
			</div>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Weighted Average Lease Term Remaining</div>
				<div class={style.propertyInfo}>{project.walt}</div>
			</div>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Contract Type</div>
				<div class={style.propertyInfo}>{project.contract_type}</div>
			</div>
		</div>

		<div class={style.headings}>Tokenization Information</div>
		<div class={style.infoCard}>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Percentage of Property Being Tokenized</div>
				<div class={style.propertyInfo}>{project.percentage_of_property_tokenized}</div>
			</div>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>
					<div>Total Tokens Available</div>
					<a href="https://etherscan.io/token/{project.token_contract}" target="_blank">-></a>
				</div>
				<div class={style.propertyInfo}>{project.total_tokens_available}</div>
			</div>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Price per Token</div>
				<div class={style.propertyInfo}>{project.price_per_token}</div>
			</div>
		</div>

		<div class={style.headings}>Projected Returns</div>
		<div class={style.infoCard}>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Expected Monthly Distribution per Token</div>
				<div class={style.propertyInfo}>{project.expected_monthly}</div>
			</div>
			<div class={style.lineItem}>
				<div class={style.propertyReference}>Expected Yearly Return</div>
				<div class={style.propertyInfo}>{project.expected_yearly_return}</div>
			</div>
		</div>
	</div>
</div>

<div class="w-full justify-center flex p-6">
	{#if $page.data.session.user}
	{#if $connected}
		<button class={style.button} on:click={mintToken}>Purchase Token</button>
	{:else}
		<button class={style.disabledButton} on:click={connectWallet}>Connect Wallet</button>
	{/if}
	{/if}
</div>

<div class={style.headings}>About the Property</div>
<div class={style.infoCard}>
	<div class="text-justify">
		{project.summary}
	</div>
</div>

<div class={style.headings}>Location</div>
<div class={style.infoCard}>
	<div class="text-justify">
		{project.location_summary}
	</div>
</div>
