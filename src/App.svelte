<script>
	import { random } from './utils';
	import { playing } from './store';
	import Quiz from './components/Quiz.svelte';

	const getRandomCountries = async (n) => {
		const randoms = Array.from({ length: n }, () => random(1, 249));
		const res = await fetch(`http://127.0.0.1:5000/countries/(${randoms.join()})`);
		return await res.json();
	};

  const test = () => {
    
  }
</script>

<main>
	{#if $playing}
		{#await getRandomCountries(8)}
			<p>Loading quiz...</p>
		{:then countries}
			<Quiz {countries} />
		{/await}
	{:else}
		<div class="start-screen">
			<button
				on:click={() => {$playing = true}}
			>
				Play
			</button>
		</div>
	{/if}
</main>
