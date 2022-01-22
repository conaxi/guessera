<script>
	import Progress from '$lib/components/Progress.svelte';
	import Questions from '$lib/components/Questions.svelte';
	import Form from '$lib/components/Form.svelte';

	export let options;
	let labels = [];

	for (let i = 0; i < options.length; i++) {
		labels.push({
			id: `option-${i+1}`,
			text: options[i]["name"]
		});
	console.log(labels)
	}
</script>

<div class="quiz__container">
	<div class="quiz__60">
		<Progress />
		<Questions />
		<div class="form">
			<Form {labels} />
		</div>
	</div>
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&family=Roboto:ital,wght@0,400;0,500;0,700;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	.quiz__container {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.6rem;

		background: #fff;
		height: 100vh;
		width: 50vw;

		overflow: hidden;
	}

	.quiz__60 {
		width: 60%;
		padding: 3rem;
	}

	.form {
		margin: 35px 0 0 0;
	}

	@media only screen and (max-width: 768px) {
		.quiz__container {
			width: 100%;
			height: 50vh;
		}
	}
</style>
