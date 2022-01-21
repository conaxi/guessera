<script>
	import Quiz from '$lib/components/Quiz.svelte';
	import Scene from '$lib/components/Scene.svelte';
</script>

<div class="canvas">
	<div class="scene">
		<Scene />
	</div>
	<div class="quiz">
		<Quiz />
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
