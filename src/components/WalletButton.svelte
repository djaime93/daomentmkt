<script>
	let connected = false;

	const connectWallet = () => {
		connected = true;
	};
</script>

{#if !connected}
	<div on:click={() => connected = !connected}>Connect Wallet</div>
{:else}
    <div on:click={() => connected = !connected}>0x34..3432</div>
{/if}
