<script lang="ts">
  export let questionNum: number = 0;
  export let totalQuestions: number = 2;
</script>

<div class="quiz__container">
  <div
    class="quiz__progress"
    style="width: {(100 / totalQuestions) * questionNum}%;"
  />
</div>

<style>
  .quiz__container {
    width: 100%;
    max-width: 466px;
    margin-bottom: 1rem;
    height: 17px;
    background: #eeeeee;
    border-radius: 16px;
  }
  .quiz__progress {
    height: 100%;
    background: #120f1f;
    transition: all 0.4s ease-in-out;
    border-radius: 16px;
  }
  @media only screen and (min-width: 810px) {
    .quiz__container {
      margin-bottom: 6.5625rem; /* 105px */
    }
  }
</style>
