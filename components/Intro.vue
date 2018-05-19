<template>
  <div class="intro">
    <div class="gs-carousel">
      <transition name="fade">
        <div
          class="gs-carousel__main-image"
          :class="[`gs-carousel__main-image--${ images[mainImage].className}`]"
          :key="mainImage"
        >
        </div>
      </transition>
      <div class="gs-carousel__other-images">
        <div class="other-image-container" v-for="(item, index) in images" :key="index">
          <div
            @click="onImageClicked(index)"
            class="other-image"
            :class="[`${ item.className}`]"
          ></div>
        </div>
      </div>
    </div>
    <div class="title">
      <h1>GOTEBORG</h1>
      <h2>STUDIO</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeout: null,
      isPlaying: true,
      mainImage: 0,
      images: [
        { className: 'first' },
        { className: 'second' },
        { className: 'third' }
      ]
    }
  },
  methods: {
    onImageClicked (index) {
      this.isPlaying = false
      this.showImage(index)
    },
    showImage (index) {
      this.mainImage = index
    },
    startCarousel () {
      const nextImage = this.mainImage === this.images.length - 1 ? 0 : this.mainImage + 1
      if (this.isPlaying) {
        this.timeout = setTimeout(this.startCarousel, 5000)
        this.showImage(nextImage)
      } else {
        this.stopCarousel()
        this.restartCarousel()
      }
    },
    stopCarousel () {
      clearTimeout(this.timeout)
    },
    restartCarousel () {
      this.isPlaying = true
      setTimeout(this.startCarousel, 10000)
    }
  },
  created: function () {
    // this.startCarousel()
  }
}
</script>


<style lang="scss">
.intro {
  width: 100%;
  position: relative;
  @media (max-width: $tablet) {
    margin-top: 50px;
  }
  .title {
    display: none;
    position: absolute;
    top: 20%;
    transition: all 250ms ease;
    @media (max-width: $tablet) {
      top: -30px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    h1 {
      font-size: 112px;
      font-weight: 300;
      font-family: 'Poiret One', cursive;
      @media (max-width: $desktop) {
        font-size: 78px;
      }
      @media (max-width: $tablet) {
        font-size: 36px;
        font-weight: bold;
      }
    }
    h2 {
      font-size: 112px;
      font-weight: 300;
      font-family: $ff-primary;
      text-align: right;
      @media (max-width: $desktop) {
        font-size: 78px;
      }
      @media (max-width: $tablet) {
        font-size: 36px;
        font-weight: bold;
      }
    }
  }
}

.gs-carousel {
  height: $carousel-height;
  position: relative;
  right: 0;
  transition: all 250ms ease;
  @media (max-width: $desktop) {
    height: 500px;
  }
  @media (max-width: $tablet) {
    height: $carousel-height-sm;
  }
  &__main-image {
    position: absolute;
    right: 20px;
    width: 900px;
    height: $carousel-height;
    background-size: cover;
    transition: all 250ms ease;
    @media (max-width: $giant) {
      right: 50px;
    }
    @media (max-width: $desktop) {
      height: 500px;
      width: 100%;
      right: auto;
    }
    @media (max-width: $tablet) {
      height: $carousel-height-sm;
    }
    &--first {
      background-image: url("~/assets/kuchnia_czarna.jpg");
    }
    &--second {
      background-image: url("~/assets/kuchnia_biala.jpg");
    }
    &--third {
      background-image: url("~/assets/kuchnia_industrialna.jpg");
    }
  }
  &__other-images {
    position: absolute;
    line-height: 0;
    bottom: 10px;
    right: 20px;
    width: 40px;
    transition: all 250ms ease;
    @media (max-width: $giant) {
      right: 50px;
    }
    @media (max-width: $desktop) {
      width: 100%;
      bottom: -50px;
      right: auto;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
}
.other-image-container {
  height: 75px;
  width: 100px;
  margin: 2px 0;
  overflow: hidden;
  @media (max-width: $desktop) {
    margin-left: 5px;
  }
}
.other-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: contrast(1.5);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: transform 3s, opacity 2s;
}
.fade-enter-active {
  transition-delay: 500ms;
}
.fade-enter {
  transform: translate(10% 0);
  opacity: 0;
}
.fade-leave-to {
  transform: translate(-20%);
  opacity: 0;
}

.first {
  background-image: url("~/assets/kuchnia_czarna.jpg");
}
.second {
  background-image: url("~/assets/kuchnia_biala.jpg");
}
.third {
  background-image: url("~/assets/kuchnia_industrialna.jpg");
}
</style>

