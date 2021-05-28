<template>
  <div
    id="contact"
    class="section contact-section"
  >
    <h3>
      <img
        class="icon"
        src="/icons/chat-room.svg"
        alt="Contact Us"
      />
      Contact Us
    </h3>
    <p>We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel</p>
    <p class="align-center">
      <a
        :href="discord"
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
        v-if="telegram"
        :href="telegram"
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
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    discord: {
      type: String, default: ''
    },
    telegram: {
      type: String, default: ''
    }
  }
}
</script>
