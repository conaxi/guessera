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
	<label>
		<input checked={selected === 20} on:change={onChange} type="radio" name="amount" value="20" /> 20
	</label>
	<label>
		<input checked={selected === 30} on:change={onChange} type="radio" name="amount" value="30" /> 30
	</label>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
