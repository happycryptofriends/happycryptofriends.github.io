<template>
  <div class="index-page page-content">
    <div class="section">
      <h1>
        Happy Crypto Friends<br>
        <span class="is-small">Honest Pump and Dump</span>
      </h1>
      <CountdownSection :deadline="deadline" />
      <h5>
        June 9th - 7pm GMT - 3pm EST <br>
        Exchange: Hotbit - pair USDT <br>
        Pump Target: 100% - 300%
      </h5>
      <p class="align-center">
        Join us on Discord and Telegram
      </p>
      <p class="align-center">
        <a
          :href="discordChannel"
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
          v-if="telegramChannel"
          :href="telegramChannel"
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
    <ManifestoSection />
    <AboutSection />
    <ContactSection
      :discord="discordChannel"
      :telegram="telegramChannel"
    />
  </div>
</template>

<script>
import CountdownSection from '~/components/CountdownSection'
import MissionSection from '~/components/MissionSection'
import FAQSection from '~/components/FAQSection'
import AboutSection from '~/components/AboutSection'
import ManifestoSection from '~/components/ManifestoSection'
import ContactSection from '~/components/ContactSection'
export default {
  name: 'IndexPage',
  components: {
    CountdownSection,
    MissionSection,
    FAQSection,
    AboutSection,
    ManifestoSection,
    ContactSection
  },
  data () {
    return {
      // date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      date: new Date('2021-06-17T19:00:00'),
      deadline: undefined,
      startTime: Date.now(),
      discordChannel: 'https://discord.gg/zvm7YKP3kJ',
      telegramChannel: ''
    }
  },
  mounted () {
    this.updateDate()
  },
  methods: {
    updateDate () {
      this.deadline = this.date.getTime() - Date.now()
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
