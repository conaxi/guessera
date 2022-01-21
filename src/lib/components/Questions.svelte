<script>
	let question = 'Where is this place?';
	let questionNum = 1;
</script>

<div class="flex col gap-10">
	<div class="quiz__num">Question {questionNum}</div>
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
		font-size: 3rem;
		line-height: 60px;

		color: #000000;
	}
</style>
