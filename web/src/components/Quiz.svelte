<script lang="ts">
  import { splitArrayIntoChunks, random } from "../utils";
  import { playing } from "../store";
  import Progress from "./Progress.svelte";
  import Scene from "./Scene.svelte";

  export let countries;

  let selected: string,
    pos: Array<any> = [],
    curQue: number = 1,
    score: number = 0,
    current: number = 0,
    questions: Array<any> = splitArrayIntoChunks(countries, 4),
    n: number = questions.length;

  questions.forEach((question) => {
    const rand: number = random(0, 3);
    question[rand]["correct"] = true;
    pos.push({
      lat: question[rand]["lat"],
      lon: question[rand]["lng"],
    });
  });
  async function submitAnswer(index: number) {
    if (questions[current][index]["correct"] == true) score++;
    current++;
    curQue = current + 1;
  }
</script>

<div class="quiz__container">
  <div class="quiz__50">
    <div class="form">
      <div class="wrapper">
        {#if current == n}
          <h1 class="quiz__question">
            You made it, your score: {score}/{questions.length}
          </h1>
          <button
            class="quit"
            on:click={() => {
              $playing = false;
            }}
          >
            Quit
          </button>
        {:else}
          <div class="flex col gap-10">
            <Progress questionNum={curQue} totalQuestions={n} />
            <div class="quiz__num">Question {curQue}</div>
            <div class="quiz__question">Where is this place?</div>
            <div class="title">Select your option</div>
            <div class="box">
              {#each questions[current] as option, i}
                <input
                  on:click={() => submitAnswer(i)}
                  type="radio"
                  value={i}
                  bind:group={selected}
                  name={option["name"]}
                  id={`option-${i + 1}`}
                />

                <label for={`option-${i + 1}`} class={`option-${i + 1}`}>
                  <div class="dot" />
                  <div class="text">{option["name"]}</div>
                </label>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="sphere">
    <Scene radius="1" pos={pos[current]} />
  </div>
</div>

<style>
  /* QUIZ */
  .title {
    font-family: Roboto;
  }
  .quiz__container {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.6rem;
    background: #fff;
    height: 100vh;
    width: 50vw;
    overflow: hidden;
  }
  .quiz__50 {
    margin-left: 2rem;
    width: 70%;
    margin-bottom: 2rem;
  }
  .form {
    margin: 35px 0 0 0;
  }
  @media only screen and (min-width: 810px) {
    .quiz__50 {
      width: 75%;
      margin-left: 0rem;
    }
  }

  @media only screen and (max-width: 810px) {
    .quiz__container {
      width: 100%;
      height: 50vh;
      margin-bottom: 0;
    }

    .quiz__50 {
      width: 80%;
      padding: 0rem;
      margin-left: 0rem;
    }

    .form {
      margin: 20px 0 0 0;
    }
  }

  /* Inputs */
  .full-quit {
    width: 100%;
    height: 100%;
    background-color: #96e6db;
  }
  .quit {
    margin-top: 2rem;

    background-color: #e8a1ae;
    border: 5px solid #f7c4c4;
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

  /* Questions */
  .gap-10 {
    gap: 10px;
  }
  .quiz__num {
    color: var(--peach);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--xbase-f);
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
    line-height: 40px;
    color: var(--black);
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 810px) {
    .quiz__question {
      font-size: var(--small-hf);
      line-height: 30px;
    }

    .quiz__num {
      font-size: var(--base-f);
    }
  }

  /* Form */
  @keyframes fadesIn {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .wrapper .box label {
    display: flex;
    height: 60px;
    width: 100%;
    max-width: 469px;
    align-items: center;
    border: 5px solid rgba(198, 196, 247, 0.5);
    border-radius: 8px;
    margin: 10px 0;
    padding-left: 20px;
    cursor: default;
    transition: all 0.3s ease;
    animation: fadesIn 1s ease-in-out 0 1 normal forwards;
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
    content: "";
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
    font-family: Roboto;
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
  .wrapper .box input[type="radio"] {
    display: none;
    flex-direction: column;
    gap: 25px;
    flex: 1;
  }

  @media only screen and (min-width: 1200px) {
    .quiz__50 {
      width: 85%;
    }
  }

  @media only screen and (max-width: 1200px) {
    .wrapper .box label {
      height: 55px;
    }
  }
</style>
