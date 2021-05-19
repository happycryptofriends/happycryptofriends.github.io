<template>
  <div class="page">
    <div id="particles-js" class="particles"></div>
    <MainMenu />
    <div class="section">
      <CountdownSection :deadline="deadline" />
      <h1 class="coming-soon">
        Next pump coming soon
      </h1>
    </div>
    <div
      id="mission"
      class="section"
    >
      <h3>Our Mission</h3>
      <p>We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel</p>
    </div>
    <div
      id="faq"
      class="section"
    >
      <h3>FAQ</h3>
      <p>We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel</p>
    </div>
    <div
      id="about"
      class="section"
    >
      <h3>About Us</h3>
      <p>We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel</p>
    </div>
    <div
      id="contact"
      class="section"
    >
      <h3>Contact</h3>
      <p>We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel</p>
      <p>
        <a href="https://discord.gg/DWHW3RfT6m" class="button">Discord</a>
        <a href="" class="button">Telegram</a>
      </p>
    </div>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu'
import CountdownSection from '~/components/CountdownSection'
export default {
  name: 'IndexPage',
  components: {
    MainMenu,
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
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .coming-soon {
    font-size: 4rem;
    color: white;
    font-weight: 500;
  }
}
</style>
