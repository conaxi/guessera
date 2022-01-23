<script>
  import Option from "./Option.svelte";
  import { splitArrayIntoChunks } from "../utils";

  export let countries;

  let selected,
    score = 0,
    current = 0,
    questions = splitArrayIntoChunks(countries, 4),
    n = questions.length,
    btnText = "next";

  async function submitAnswer() {
    if (selected == true) { //select is a string of bool
      score++;
    }
    current++;
    switch (current) {
      case n:
        confirm(`DONE! You scored: ${score}/${questions.length}`);
        return window.location.reload();

      case n - 1:
        btnText = "submit";
        break
    }
  }
</script>

<div class="quiz">
  <p>selection is: {selected}</p>
  <h1>What country is this ?</h1>
  <div class="options">
    <label for="quiz-form">Pick an option</label>
    <select name="quiz-form" id="quiz-form" bind:value={selected}>
      {#each questions[current] as option}
        <Option {option} />
      {/each}
    </select>
    <button on:click={submitAnswer}>
      {btnText}
    </button>
  </div>
</div>
