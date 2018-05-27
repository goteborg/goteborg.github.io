<template>
  <div class="lightbox">
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <div
          @click="showLightbox(index)"
          v-bind:style="{ backgroundImage: 'url('+image.src+')' }"
        ></div>
      </li>
    </ul>
    <div class="lightbox__modal" v-show="isLightboxDisplayed">
      <div class="lightbox__modal__icn-close" @click="closeLightbox">
        <div data-icon="ei-close" data-size="m"></div>
      </div>
      <div class="lightbox__modal__image">
        <img :src="bigImageSource" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data () {
    return {
      isLightboxDisplayed: false
    }
  },
  created () {
    this.bigImageSource = this.$props.images[0].src
  },
  methods: {
    showLightbox (index) {
      console.log(index)
      this.bigImageSource = this.$props.images[index].src
      this.isLightboxDisplayed = true
    },
    closeLightbox () {
      this.isLightboxDisplayed = false
    }
  }
}
</script>

<style scoped lang="scss">
.lightbox {
  padding: 48px;
  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    li {
      display: inline-block;
      margin: 5px;

      div {
        width: 300px;
        height: 120px;
        background-size: cover;
        background-position: 10%;
      }
    }
  }
}
.lightbox__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparentize($black, 0.05);
  z-index: 2;
  &__icn-close {
    position: absolute;
    top: 5%;
    right: 5%;
  }
  &__image {
    max-height: 70%;
    @media (max-width: $tablet) {
      max-height: initial;
      width: 100%;
    }
    img {
      max-height: 800px;
      @media (max-width: $tablet) {
        max-height: initial;
        width: 100%;
      }
    }
  }
}
</style>
