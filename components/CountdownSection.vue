<template>
  <div class="countdown-section">
    <div class="countdown-item">
      <span class="countdown-value">{{ days }}</span>
      <div class="small-text">Days</div>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">{{ ('0' + hours).slice(-2) }}</span>
      <div class="small-text">Hours</div>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">{{ ('0' + minutes).slice(-2) }}</span>
      <div class="small-text">Minutes</div>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">{{ ('0' + seconds).slice(-2) }}</span>
      <div class="small-text">Seconds</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownSection',
  props: {
    deadline: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    }
  },
  watch: {
    deadline: {
      handler () {
        this.seconds = Math.floor((this.deadline / 1000) % 60)
        this.minutes = Math.floor((this.deadline / 1000 / 60) % 60)
        this.hours = Math.floor((this.deadline / (1000 * 60 * 60)) % 24)
        this.days = Math.floor(this.deadline / (1000 * 60 * 60 * 24))
      },
      immediate: true
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.countdown-section {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 740px;

  .countdown-item {
    display: flex;
    flex-direction: column;
    width: 148px;
    padding: 2rem 0;
    border-radius: 6px;
    background-color: rgba(255,255,255,0.1);
    margin: 0 0.5rem;
  }
  .countdown-value {
    font-size: 5rem;
    text-align: center;
    padding: 0 0 0;
    font-weight: 500;
  }
  .small-text {
    font-size: 16px;
    text-align: center;
    font-weight: 300;
  }
}
</style>
