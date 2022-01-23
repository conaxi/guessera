<script>
  import { random } from "./utils";
  import Quiz from "./components/Quiz.svelte"

  const getRandomCountries = async (n) => {
    const randoms = Array.from({ length: n }, () => random(1, 249));
    const res = await fetch(
      `http://127.0.0.1:5000/countries/(${randoms.join()})`
    );
    return await res.json();
  };
</script>

<main>
  {#await getRandomCountries(8)}
    <p>Loading quiz...</p>
  {:then countries} 
    <Quiz {countries}/>
  {/await}
</main>
