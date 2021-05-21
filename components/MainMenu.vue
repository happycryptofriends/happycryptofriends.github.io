<template>
  <div class="main-menu">
    <div class="content">
      <div class="left-menu">
        <nuxt-link
          to="/"
          class="menu-item"
        >
          <img
            class="logo"
            src="/logo.png"
            alt="Happy Crypto Friends"
          >
          Happy Crypto Friends
        </nuxt-link>
      </div>
      <div class="right-menu">
        <nuxt-link
          to="/#mission"
          class="menu-item"
        >
          Mission
        </nuxt-link>
        <nuxt-link
          to="/#faq"
          class="menu-item"
        >
          FAQ
        </nuxt-link>
        <nuxt-link
          to="/#about"
          class="menu-item"
        >
          About Us
        </nuxt-link>
        <nuxt-link
          to="/#contact"
          class="menu-item"
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="scss" scoped>
.main-menu {
  position: fixed;
  display: flex;
  color: white;
  width: 100%;
  padding: 0 2rem;

  .content {
    background-color: rgba(56, 184, 142, 0.75);
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;
  }

  .left-menu, .right-menu {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 36px;
    height: 36px;
    margin-right: 0.5rem;
  }
}
</style>
