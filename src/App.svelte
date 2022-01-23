<script>
	import { random } from './utils';
	import { playing } from './store';
	import Quiz from './components/Quiz.svelte';

	const getRandomCountries = async (n) => {
		const randoms = Array.from({ length: n }, () => random(1, 249));
		const res = await fetch(`http://127.0.0.1:5000/countries/(${randoms.join()})`);
		return await res.json();
	};

	//   const test = () => {

	//   }
</script>

<main>
	{#if $playing}
		{#await getRandomCountries(8)}
			<p>Loading quiz...</p>
		{:then countries}
			<Quiz {countries} />
		{/await}
	{:else}
		<div class="start-screen">
			<div class="absolute-img">

			</div>
			<div class="flex col gap-20 center full">
				<h1 class="header">Learn geography through an <span class="secondary">interactive</span> and <span class="secondary">gamified</span> quiz</h1>
				<p class="desc">Geography is often taught in a very theorical manner, forcing students to learn by heart a list of countries. This
				project aims to offer an interactive alternative, where students can learn by having fun and experiencing
				things firsthand.</p>
				<div>
					<button id="btn"
						on:click={() => {$playing = true}}
					>
						Play
					</button>
				</div>
			</div>

		</div>
	{/if}
</main>

<style>
.start-screen {
	width: 100%;
	height: 100vh;
}

.full {
	background: rgb(150, 230, 219);
	width: 100%;
	height: 100vh;
}

.flex {
	display: flex;
	flex: 1;
}

.col {
	flex-direction: column;
}

.center {
	align-items: center;
	justify-content: center;
}

.secondary {
	color: #FF764A;
}

.header, .desc {
	text-align: center;
}

.header {
	font-family: Outfit;
	font-style: normal;
	font-weight: 900;
	font-size: var(--xlarge-hf);
	line-height: 60px;
	margin-bottom: 2rem;
	max-width: 600px;
}

.desc {
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 23px;
	margin-bottom: 4rem;
	max-width: 600px;
}

#btn {
	border: 5px solid #F7C4C4;
	box-sizing: border-box;
	border-radius: 5px;

	width: 50%;
	min-width: 400px;
	max-width: 496px;
	height: 60px;
	background-color: #ff8181;
	font-size: 18px;
	text-transform: uppercase;
	cursor: pointer;
	color: white;
}

@media only screen and (max-width: 800px) {
	.flex {
		padding: 2rem;
	}
	.header {
		font-size: var(--med-hf);
		line-height: 30px;
	}

	#btn {
		min-width: 200px;
		width: 80%;
		max-width: 250px;
	}
}
</style>
