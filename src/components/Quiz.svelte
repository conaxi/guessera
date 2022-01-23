<script>
	import { splitArrayIntoChunks, random } from '../utils';
	import { playing } from '../store';
	import Option from './Option.svelte';

	export let countries;

	let selected,
		score = 0,
		current = 0,
		questions = splitArrayIntoChunks(countries, 4),
		n = questions.length;

  questions.forEach((question) => {
    question[random(0, 3)]["correct"] = true;
  })

	async function submitAnswer() {
		if (selected == true) score++;
		current++;
	}
</script>

<div class="quiz">
	{#if current == n}
  <h1>DONE! Score: {score}/{questions.length}</h1>
		<button
			on:click={() => {
				$playing = false;
			}}
		>
			Quit
		</button>
	{:else}
		<h1>What country is this ?</h1>
		<div class="options">
			<label for="quiz-form">Pick an option</label>
			<select name="quiz-form" id="quiz-form" bind:value={selected}>
				{#each questions[current] as option}
					<Option {option} />
				{/each}
			</select>
		</div>
		<button on:click={submitAnswer}> Next </button>
	{/if}
</div>
