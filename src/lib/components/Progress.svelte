<script>
	export let questionNum = 60;
	export let totalQuestions = 120;
</script>

<div class="quiz__container">
	<div class="quiz__progress" style="width: {(100 / totalQuestions) * questionNum}%;" />
</div>

<style>
	.quiz__container {
		width: 100%;
		margin-bottom: 1rem;
		height: 17px;

		background: #eeeeee;
		border-radius: 16px;
	}

	.quiz__progress {
		height: 100%;
		background: var(--black);
		border-radius: 16px;
	}

	@media only screen and (min-width: 810px) {
		.quiz__container {
			margin-bottom: 6.5625rem; /* 105px */
		}
	}
</style>
