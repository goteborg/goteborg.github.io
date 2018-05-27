<template>
  <div class="section" id="kontakt">
    <h1 class="section__title">Kontakt</h1>
    <v-layout row wrap class="section__description">
      <div class="contact">
        <div class="contact__details">
          <img  class="contact__image" src="~/assets/logo_goteborg-studio.png">
          <div class="border-gold-1">
            <div class="border-gold-2">
              <span>Napisz, otrzymasz wycenę w 24h</span>
            </div>
          </div>
          <h3>biuro@goteborg-studio.pl</h3>
          <h4>tel: +48 570686169</h4>
        </div>
        <div class="contact__social">
          <div href="https://www.facebook.com/goteborg.studio/" @click="openSocialLink">
            <div data-icon="ei-sc-facebook" data-size="m"></div>
          </div>
          <div href="https://www.instagram.com/goteborg.studio" @click="openSocialLink">
            <div data-icon="ei-sc-instagram" data-size="m"></div>
          </div>
          <div href="https://pinterest.com/goteborgstudio/" @click="openSocialLink">
            <div data-icon="ei-sc-pinterest" data-size="m"></div>
          </div>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    openSocialLink (e) {
      const link = e.target.parentElement.getAttribute('href')
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
.section {
  background-color: $white;
  color: $black;
  &__title {
    color: $black;
  }
  &__description {
    @media (max-width: $tablet) {
      padding: 0 50px;
    }
    @media (max-width: $phone) {
      padding: 48px 10px;
    }
  }
}
.contact {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__image {
    width: 45%;
    margin-bottom: 24px;
  }
  &__details {
    width: 50%;
    margin: 0 auto;
    margin-top: 36px;
    text-align: center;
     @media (max-width: $tablet) {
      width: 90%;
    }
    h3 {
      margin-top: 24px;
      margin-bottom: 8px;
    }
  }
  &__social {
    width: 50%;
    margin: 0 auto;
    margin-top: 36px;
    text-align: center;
    > div {
      display: inline-block;
      cursor: pointer;
    }
  }
}
.border-gold {
  &-1 {
    display: inline-block;
    border: 1px solid darkgoldenrod;
    padding: 4px;
  }
  &-2 {
    border: 1px solid darkgoldenrod;
    padding: 24px;
  }
}
</style>
