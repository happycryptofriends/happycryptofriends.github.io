<template>
  <div class="server-config-page page-content">
    <div class="section" v-if="!$socket.connected">
      <h1>Invalid Token</h1>
    </div>
    <div class="section" v-if="$socket.connected">
      <h1>HappyAI config</h1>
      <fieldset>
        <div class="field">
          <h4>General</h4>
        </div>
        <div class="field">
          <label class="label">Verification Channel ID</label>
          <div class="control">
            <input
              v-model="config.verificationChannel"
              type="text"
              class="input"
              placeholder="e.g 845654649179602944"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Unverified Role ID</label>
          <div class="control">
            <input
              v-model="config.unverifiedRole"
              type="text"
              class="input"
              placeholder="e.g 845654649179602944"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Default User ID</label>
          <div class="control">
            <input
              v-model="config.userRole"
              type="text"
              class="input"
              placeholder="e.g 845654649179602944"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Verification Kick Timeout (minutes)</label>
          <div class="control">
            <input
              v-model="config.verificationKickTimeout"
              type="text"
              class="input"
              placeholder="e.g 720"
            />
          </div>
        </div>

        <div class="field">
          <h4>Pump</h4>
        </div>
        <div class="field">
          <label class="label">InitMessage</label>
          <div class="control">
            <textarea
              v-model="config.pump.initMessage"
              class="textarea"
              placeholder="e.g 846083388792242176"
            />
          </div>
        </div>
        <div
          v-for="(message, i) in config.pump.messages"
          :key="message.minutesLeft"
          class="field pump-time-field"
        >
          <label class="label">Minutes left</label>
          <div class="control">
            <input
              v-model="message.minutesLeft"
              class="input"
              placeholder="e.g 720"
            />
          </div>
          <label class="label">Message</label>
          <div class="control">
            <textarea
              v-model="message.message"
              class="textarea"
              placeholder="e.g 846083388792242176"
            />
          </div>
          <div
            class="remove-time"
            @click="removeTime(i)"
          >✖</div>
        </div>
        <div class="field">
          <div
            class="button"
            @click="addTime"
          >
            Add time
          </div>
        </div>
      </fieldset>

      <div class="save-panel">
        <div class="field">
          <div
            class="button"
            :class="{ 'is-loading': isSaving, 'has-changes': hasChanges }"
            @click="setConfig"
          >
            Save changes
          </div> <span v-if="success && !hasChanges">Success!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerConfigPage',
  data () {
    return {
      isSaving: false,
      success: false,
      oldConfig: {},
      config: {
        verificationChannel: '',
        unverifiedRole: '',
        userRole: '',
        verificationKickTimeout: 1440,
        pump: {
          initMessage: '',
          messages: [{
            minutesLeft: 720,
            message: ''
          }],
          token: ''
        }
      }
    }
  },
  computed: {
    hasChanges () {
      console.log('JSON.stringify(this.config)', JSON.stringify(this.config))
      console.log('JSON.stringify(this.oldConfig)', JSON.stringify(this.oldConfig))
      return JSON.stringify(this.config) !== JSON.stringify(this.oldConfig)
    }
  },
  mounted () {
    console.log('this.$socket', this.$socket)
    this.$socket.emit('get-config', config => {
      console.log('get config', config)
      this.config = config
      this.oldConfig = JSON.parse(JSON.stringify(config))
    })
    console.log('mounted')
  },
  methods: {
    setConfig () {
      this.$socket.emit('set-config', this.config, config => {
        console.log('set config', config)
        this.config = config
        this.oldConfig = JSON.parse(JSON.stringify(config))
        this.success = true
      })
    },
    addTime () {
      this.config.pump.messages.push({
        minutesLeft: undefined,
        message: undefined
      })
      this.oldConfig.pump.messages.push({
        minutesLeft: undefined,
        message: undefined
      })
    },
    removeTime (i) {
      console.log('this.config.pump.messages[i].minutesLeft', this.config.pump.messages[i].minutesLeft)
      if (this.config.pump.messages[i].minutesLeft === undefined) {
        this.config.pump.messages.splice(i, 1)
        this.oldConfig.pump.messages.splice(i, 1)
      } else {
        this.config.pump.messages.splice(i, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.server-config-page {
  fieldset {
    @media (max-width: 700px) {
      width: 100%;
    }
  }

  .field {
    width: 600px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  .save-panel {
    margin-top: 2rem;

    span {
      margin-left: 0.5rem;
      font-weight: 500;
    }
  }

  .has-changes {
    background-color: var(--color-primary);
  }

  .pump-time-field {
    position: relative;

    .remove-time {
      position: absolute;
      top: 0;
      left: -20px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
</style>
