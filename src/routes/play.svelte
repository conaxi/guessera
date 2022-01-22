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
	.canvas {
		display: flex;
		overflow-x: hidden;
		overflow-y: hidden;
	}
	.quiz {
		z-index: 9999;
	}
	@media only screen and (max-width: 768px) {
		.canvas {
			display: flex;
			flex-direction: column-reverse;
		}
	}
</style>
