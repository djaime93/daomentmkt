<script>
	let connected = false;

	const connectWallet = () => {
		connected = true;
	};

	const style = {
		connectButton: `p-2 bg-black text-white`,
		connectedButton: `p-2 bg-gray-400 text-white`,
	}
</script>

{#if !connected}
	<div class={style.connectButton} on:click={() => connected = !connected}>Connect Wallet</div>
{:else}
    <div class={style.connectedButton} on:click={() => connected = !connected}>0x34..3432</div>
{/if}
