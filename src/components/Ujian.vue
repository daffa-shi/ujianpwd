<template>
  <div>
    <div class="ujian">
      <h2>Ujian</h2>
      <div v-for="(tests_val, tests_idx) in test" :key="tests_idx">
        <h3>{{tests_idx+1}}. {{tests_val.question}}</h3>
        <div v-for="(answers_val, answers_idx) in tests_val.answer" :key="answers_idx">
          <input type="radio" :name="tests_idx" :value="answers_val[0]">
          <h5 v-text="answers_val[0]"></h5>
        </div>
      </div>
      <button type="button" name="button">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ujian',
  data () {
    return {
      test: [
        {
          question: 'Siapakah Penemu Lampu?',
          answer: [
            ['Thomas Alfa Edison', true],
            ['Alexander Graham Bell'],
            ['Joko widodo'],
            ['James Watt']
          ]
        },
        {
          question: '5 + 2 x 5 + 5 =',
          answer: [
            ['55'],
            ['70'],
            ['20', true],
            ['50']
          ]
        }
      ],
      right_answer: [],
      wrong_answer: [],
      score: 0
    }
  },
  methods: {

  }

}
</script>
