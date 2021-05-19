<template>
  <div class="main-menu">
    <div class="content">
      <div class="left-menu">
        <div class="menu-item">
          <img class="logo" src="/logo.png" alt="Happy Crypto Friends">
          Happy Crypto Friends
        </div>
      </div>
      <div class="right-menu">
        <a href="#mission" class="menu-item">
          Mission
        </a>
        <a href="#faq" class="menu-item">
          FAQ
        </a>
        <a href="#about" class="menu-item">
          About Us
        </a>
        <a href="#contact" class="menu-item">
          Contact
        </a>
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
    background-color: rgba(56, 184, 142, 0.8);
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

  .menu-item {
    display: inline-flex;
    align-items: center;
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 1rem;
    border-radius: 4px;
    background-color: transparent;
    color: white;
    text-decoration: none;
    transition: 0.3s all ease;

    &:hover {
      background-color: rgba(255,255,255,0.1);
    }
  }
}
</style>
