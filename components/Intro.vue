<template>
  <div class="intro">
    <div class="title">
      <h1>GOTEBORG</h1>
      <h2>STUDIO</h2>
    </div>
    <div class="gs-carousel">
      <transition name="fade">
        <div
          class="gs-carousel__main-image"
          :style="{ 'background-image': 'url(' + images[mainImage].link + ')' }"
          :key="mainImage"
        >
        </div>
      </transition>
      <div class="gs-carousel__other-images">
        <div class="other-image-container" v-for="(item, index) in images" :key="index">
          <div
            :style="{ 'background-image': 'url(' + item.link + ')' }"
            @click="onImageClicked(index)"
            class="other-image"
          ></div>
        </div>
      </div>
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
        {
          link: 'http://www.shalinimisra.com/wp-content/uploads/2016/12/Shalini_Misra_Interior_Designer_London.jpg'
        },
        {
          link: 'http://momentumauctions.com/wp-content/uploads/2017/09/Kiev_Apt_MARTIN_architects_1.0.jpg'
        },
        {
          link: 'https://s-media-cache-ak0.pinimg.com/originals/c2/44/3b/c2443b74dd8be20fd8d34d97d64bbda8.jpg'
        }
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
        // this.timeout = setTimeout(this.startCarousel, 5000)
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
      // setTimeout(this.startCarousel, 10000)
    }
  },
  created: function () {
    this.startCarousel()
  }
}
</script>


<style lang="scss">
.intro {
  width: 100%;
  position: relative;
  .title {
    position: absolute;
    top: 20%;
    font-size: 4rem;
    z-index: 1;
    color: $black;
    h1 {
      font-size: 112px;
      font-weight: 300;
      font-family: 'Poiret One', cursive;
      text-shadow: 2px 2px rgba(255, 255, 255, 0.5);
      @media (max-width: 900px) {
        font-size: 78px;
      }
      @media (max-width: 480px) {
        font-size: 56px;
      }
    }
    h2 {
      font-size: 112px;
      font-weight: 300;
      font-family: 'Montserrat', sans-serif;
      text-shadow: 2px 2px rgba(255, 255, 255, 0.5);
      @media (max-width: 900px) {
        font-size: 78px;
      }
      @media (max-width: 480px) {
        font-size: 56px;
      }
    }
  }
}
.gs-carousel {
  height: $carousel-height;
  position: relative;
  right: 0;
  @media (max-width: 900px) {
    height: $carousel-height-sm;
  }
  &__main-image {
    position: absolute;
    right: 20px;
    width: 900px;
    height: $carousel-height;
    background-size: cover;
    @media (max-width: 900px) {
      height: $carousel-height-sm;
      width: 100%;
    }
  }
  &__other-images {
    position: absolute;
    line-height: 0;
    bottom: 10px;
    right: 0;
    width: 40px;
  }
}
.other-image-container {
  height: 50px;
  width: 50px;
  margin: 2px 0;
  overflow: hidden;
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
</style>

