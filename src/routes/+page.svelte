<script>
	// import { page } from '$app/stores';
	import PropertyCard from '../components/PropertyCard.svelte';

	export let data;
	const { projects } = data;

	const style = {
		cards: `grid sm:grid-cols-2 lg:grid-cols-3`
	};
</script>

<div class={style.cards}>
	{#each projects as project}
		<PropertyCard {project} />
	{/each}
</div>
