<template>
  <div class="index-page page-content">
    <div class="section">
      <h1>Honest Pump and Dump</h1>
      <CountdownSection :deadline="deadline" />
      <h5>
        June 1st - 8pm GMT - 4pm EST <br>
        Exchange: Hotbit - pair USDT <br>
        Pump Target: 300% - 1000%
      </h5>
      <p>Join us on Discord and Telegram</p>
      <p>
        <a
          href="https://discord.gg/zvm7YKP3kJ"
          target="_blank"
          class="button"
        >
          <img
            class="icon"
            src="/icons/discord.svg"
            alt="discrod"
          />
          Discord
        </a>
        <a
          href=""
          class="button"
          target="_blank"
        >
          <img
            class="icon"
            src="/icons/telegram.svg"
            alt="Telegram"
          />
          Telegram
        </a>
      </p>
    </div>
    <MissionSection />
    <FAQSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script>
import CountdownSection from '~/components/CountdownSection'
import MissionSection from '~/components/MissionSection'
import FAQSection from '~/components/FAQSection'
import AboutSection from '~/components/AboutSection'
import ContactSection from '~/components/ContactSection'
export default {
  name: 'IndexPage',
  components: {
    CountdownSection,
    MissionSection,
    FAQSection,
    AboutSection,
    ContactSection
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
.index-page {
  padding-top: 2rem;

  .countdown-section {
    margin-bottom: 2rem;
  }
}
</style>
