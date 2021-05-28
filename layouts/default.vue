<template>
  <div class="page">
    <div id="particles-js" class="particles"></div>
    <MainMenu />
    <Nuxt/>
    <div class="section footer">
      <div class="left-footer">
        <nuxt-link
          to="/"
          class="menu-item is-small"
        >
          © 2021 Happy Crypto Friends
        </nuxt-link>
      </div>
      <div class="right-footer">
        <nuxt-link
          to="/terms"
          class="menu-item is-small"
        >
          Terms and condition
        </nuxt-link>
        <nuxt-link
          to="/policy"
          class="menu-item is-small"
        >
          Privacy Policy
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu'

export default {
  name: 'DefaultLayout',
  components: {
    MainMenu
  },
  mounted () {
    require('particles.js')
    window.particlesJS.load('particles-js', '/particles.json')
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      }
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
.footer {
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;

  .left-footer, .right-footer {
    display: flex;
    align-items: center;
  }

  .item {
    margin-right: 1rem;
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
}
</style>
