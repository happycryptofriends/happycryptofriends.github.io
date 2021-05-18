<template>
  <div class="page">
    <div id="particles-js" class="particles"></div>
    <h1 class="coming-soon">Coming soon</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    require('particles.js')
    window.particlesJS.load('particles-js', '/particles.json', function () {
      console.log('callback - particles.js config loaded')
    })
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
}
.page {
  display: flex;
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
