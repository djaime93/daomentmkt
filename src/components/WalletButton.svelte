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

	const connectWallet = () => {
		defaultEvmStores.setProvider();
	};

	const disconnectWallet = () => {
		defaultEvmStores.disconnect();
	};

	const style = {
		connectButton: `p-2 bg-black text-white`,
		connectedButton: `p-2 bg-gray-400 text-white`
	};
</script>

{#if !$connected}
	<div class={style.connectButton} on:click={connectWallet}>Connect Wallet</div>
{:else}
	<div class={style.connectedButton} on:click={disconnectWallet}>
		{$signerAddress.slice(0, 5)}...{$signerAddress.slice(-3)}
	</div>
	<!-- {$chainData.name}
	{$chainData.nativeCurrency.name} -->
	<!-- {JSON.stringify($chainData.nativeCurrency.name)} -->
{/if}
