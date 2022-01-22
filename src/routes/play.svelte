<script>
	import Quiz from '$lib/components/Quiz.svelte';
	import Scene from '$lib/components/Scene.svelte';
	import { random } from '$lib/utils';
	import { DB } from '$lib/database/db';
</script>

<div class="canvas">
	<div class="scene">
		<Scene />
	</div>
	<div class="quiz">
		{#await DB.readMany('countries', Array.from({ length: 4 }, () => random(1, 250)))}
				<p>loading</p>			
			{:then countries} 
				<Quiz options={countries}/> 
			{/await}
	</div>
</div>

<style>
	:global(:root) {
		/* Typefaces | hf = headfont */
		--xlarge-hf: 3.75rem; /* 60px */
		--large-hf: 3rem; /* 48px */
		--med-hf: 2.25rem; /* 36px */
		--small-hf: 1.875rem; /* 30px */

		--base-f: 1rem; /* 16px */
		--xbase-f: 1.125rem; /* 18px */

		/* Colour */
		--black: #000000;
	}

	:global(html, body) {
		overflow: hidden !important;
	}

	.canvas {
		display: flex;
	}

	.quiz {
		z-index: 9999;
	}

	@media only screen and (max-width: 1200px) {
		.canvas {
			flex-direction: column;
		}
	}
</style>
