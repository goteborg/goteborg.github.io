<template>
  <div class="section" id="projekty">
    <h1 class="section__title">Projekty</h1>
    <Lightbox
      :images="images"
    ></Lightbox>
  </div>
</template>

<script>
import Lightbox from '~/components/Lightbox.vue'
export default {
  components: {
    Lightbox
  },
  data () {
    return {
      images: [
        {
          id: 'gotheborg_studio_img_1',
          src: 'images/26.jpg'
        },
        {
          id: 'gotheborg_studio_img_2',
          src: 'images/21.jpg'
        },
        {
          id: 'gotheborg_studio_img_3',
          src: 'images/24.jpg'
        },
        {
          id: 'gotheborg_studio_img_4',
          src: 'images/03.jpg'
        },
        {
          id: 'gotheborg_studio_img_5',
          src: 'images/07.jpg'
        },
        {
          id: 'gotheborg_studio_img_6',
          src: 'images/20.jpg'
        },
        {
          id: 'gotheborg_studio_img_7',
          src: 'images/13.jpg'
        },
        {
          id: 'gotheborg_studio_img_8',
          src: 'images/16.jpg'
        },
        {
          id: 'gotheborg_studio_img_9',
          src: 'images/15.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
.section {
  margin-top: 100px;
  &__title {
    text-align: left;
    padding-left: 100px;
    @media (max-width: $phone) {
      text-align: center;
      padding-right: 0;
      padding-left: 0;
    }
  }
}
</style>
