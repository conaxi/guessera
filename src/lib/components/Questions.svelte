<script>
	let question = 'Where is this place?';
</script>

<div class="flex col gap-10">
	<div class="quiz__num">Question 1</div>
	<div class="quiz__question">{question}</div>
</div>

<style>
	.gap-10 {
		gap: 10px;
	}

	.quiz__num {
		color: #ffa800;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1.125rem;
		line-height: 21px;
		/* identical to box height */
		letter-spacing: 0.19em;
		text-transform: uppercase;
	}

	.quiz__question {
		font-family: Outfit;
		font-style: normal;
		font-weight: bold;
		font-size: var(--large-hf);
		line-height: 60px;

		color: var(--black);
	}

	@media only screen and (max-width: 810px) {
		.quiz__question {
			font-size: var(--small-hf);
			line-height: 30px;
		}
	}
</style>
