<script>
	let selected = '20';

	function onChange(event) {
		selected = event.currentTarget.value;
	}
</script>

<div class="container">
	<label>
		<input checked={selected === 10} on:change={onChange} type="radio" name="amount" value="10" /> 10
	</label>
	<label class="correct">
		<input checked={selected === 20} on:change={onChange} type="radio" name="amount" value="20" /> 20
	</label>
	<label class="wrong">
		<input checked={selected === 30} on:change={onChange} type="radio" name="amount" value="30" /> 30
	</label>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 25px;
		flex: 1;
	}

	.container label {
		display: block;
		width: 100%;
		max-width: 466px;
		height: 75px;

		border: 5px solid rgba(198, 196, 247, 0.5);
		box-sizing: border-box;
		border-radius: 9px;
	}

	.container label.correct {
		background: #95aadf;
		border: 5px solid rgba(198, 196, 247, 0.5);
	}

	.container label.wrong {
		background: #de957e;
		border: 5px solid #f7c4c4;
	}
</style>
