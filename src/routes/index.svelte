<script context="module">
	import { random } from '$lib/utils';
	import { DB } from '$lib/database/db';

	export async function load() {
		let res = DB.readMany(
			'countries',
			Array.from({ length: 20 }, () => random(1, 250))
		);
		return {
			props: {
				countries: await res
			}
		};
	}
</script>

<script>
	export let countries;
</script>

<div class="container">
	<a href="./play">Play</a>
</div>

<p>countries</p>
<ul>
	{#each countries as country}
		<li>{country['name']}: ({country['lat']},{country['lng']})</li>
	{/each}
</ul>
