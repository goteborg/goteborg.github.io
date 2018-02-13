<template>
  <div>
    <ul v-for="(step, index) in bold" :key="index">
      <li>
        <div>
          <component v-bind:is="step.icon" width="40px"/>
          <h3 class="headline mb-3">{{ step.title }}</h3>
        </div>
        <div class="sublist-wrapper">
          <span
            v-for="(subtitle, index) in step.subtitles"
            :key="index"
            class="sublist"
          >
            {{ subtitle }}
            <br/>
          </span>
        </div>
        <div v-if="index !== bold.length - 1" class="hr"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import SpeechBubbles from '~/assets/speech-bubbles.svg'
import Compass from '~/assets/compass.svg'
import HousePlans from '~/assets/house-plans.svg'
import Cherry from '~/assets/cherry.svg'

import packets from '../../static/packets.json'

export default {
  components: {
    SpeechBubbles,
    Compass,
    HousePlans,
    Cherry
  },
  data () {
    return {
      bold: packets.bold
    }
  }
}
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>

