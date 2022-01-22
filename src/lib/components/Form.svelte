<script>
</script>

<<<<<<< HEAD
<div class="wrapper">
	<div class="title">Select your option</div>
	<div class="box">
		<input type="radio" name="select" id="option-1" />
		<input type="radio" name="select" id="option-2" />
		<input type="radio" name="select" id="option-3" />
		<input type="radio" name="select" id="option-4" />
		<label for="option-1" class="option-1">
			<div class="dot" />
			<div class="text">Answer 1</div>
		</label>
		<label for="option-2" class="option-2">
			<div class="dot" />
			<div class="text">Answer 2</div>
		</label>
		<label for="option-3" class="option-3">
			<div class="dot" />
			<div class="text">Answer 3</div>
		</label>
		<label for="option-4" class="option-4">
			<div class="dot" />
			<div class="text">Answer 4</div>
		</label>
	</div>
=======
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
>>>>>>> 07d9b5ced0da2bb67d3d635619bad4db9add1f04
</div>

<style>
	.wrapper .box label {
		display: flex;
<<<<<<< HEAD
		height: 60px;
		width: 100%;
		align-items: center;
		border: 5px solid lightgray;
		border-radius: 8px;
		margin: 10px 0;
		padding-left: 20px;
		cursor: default;
		transition: all 0.3s ease;
	}
	#option-1:checked ~ .option-1,
	#option-2:checked ~ .option-2,
	#option-3:checked ~ .option-3,
	#option-4:checked ~ .option-4 {
		background: #0f4ce4;
		border-color: #0f4ce4;
	}
	.wrapper .box label .dot {
		height: 20px;
		width: 20px;
		background: #d9d9d9;
		border-radius: 50%;
		position: relative;
		transition: all 0.3s ease;
	}
	.box label .dot::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(2);
		width: 9px;
		height: 9px;
		border-radius: 50%;
		transition: all 0.3s ease;
	}
	#option-1:checked ~ .option-1 .dot::before,
	#option-2:checked ~ .option-2 .dot::before,
	#option-3:checked ~ .option-3 .dot::before,
	#option-4:checked ~ .option-4 .dot::before {
		background: #0f4ce4;
		transform: translate(-50%, -50%) scale(1);
	}
	.wrapper .box label .text {
		color: #0f4ce4;
		font-size: 18px;
		font-weight: 400;
		padding-left: 10px;
		transition: color 0.3s ease;
	}
	#option-1:checked ~ .option-1 .text,
	#option-2:checked ~ .option-2 .text,
	#option-3:checked ~ .option-3 .text,
	#option-4:checked ~ .option-4 .text {
		color: #fff;
	}
	.wrapper .box input[type='radio'] {
		display: none;
=======
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
>>>>>>> 07d9b5ced0da2bb67d3d635619bad4db9add1f04
	}
</style>
