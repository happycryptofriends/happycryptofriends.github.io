<template>
  <div class="page">
    <div id="particles-js" class="particles"></div>
    <MainMenu />
    <Nuxt/>
    <div class="section footer">
      <p>
        <nuxt-link
          to="/"
          class="menu-item is-small"
        >
          © 2021 Happy Crypto Friends
        </nuxt-link>
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
      </p>
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
    window.particlesJS.load('particles-js', '/particles.json', function () {
      console.log('callback - particles.js config loaded')
    })
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
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
  justify-content: flex-start;
  padding-bottom: 1rem;

  .item {
    margin-right: 1rem;
  }
}
</style>
