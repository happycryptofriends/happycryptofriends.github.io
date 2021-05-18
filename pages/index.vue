<template>
  <div class="page">
    <div id="particles-js" class="particles"></div>
    <CountdownSection :deadline="deadline"/>
    <h1 class="coming-soon">
      Next pump coming soon
    </h1>
  </div>
</template>

<script>
import CountdownSection from '~/components/CountdownSection'
export default {
  name: 'IndexPage',
  components: {
    CountdownSection
  },
  data () {
    return {
      // date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      date: new Date('2021-06-01'),
      deadline: undefined,
      startTime: Date.now()
    }
  },
  mounted () {
    require('particles.js')
    window.particlesJS.load('particles-js', '/particles.json', function () {
      console.log('callback - particles.js config loaded')
    })
    this.updateDate()
  },
  methods: {
    updateDate () {
      this.date = new Date(this.date.getTime() - 1000)
      this.deadline = this.date.getTime() - this.startTime
      setTimeout(() => {
        this.updateDate()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.particles {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .coming-soon {
    font-size: 4rem;
    color: white;
    font-weight: 500;
    margin-top: -3rem;
  }
}
</style>
