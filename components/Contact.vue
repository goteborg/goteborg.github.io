<template>
  <div class="section" id="kontakt">
    <h1 class="section__title">Kontakt</h1>
    <v-layout row wrap class="section__description">
      <div class="contact">
        <div class="contact__details">
          <div class="border-gold-1">
            <div class="border-gold-2">
              <span>Napisz, otrzymasz wycenę w 24h</span>
            </div>
          </div>
          <h3>biuro@goteborg-studio.pl</h3>
          <h4>tel: +48 570686169</h4>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<style scoped lang="scss">
@import "./common.scss";
.section {
  background-color: $white;
  color: $black;
  &__title {
    color: $black;
  }
  &__description {
    padding: 48px;
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
  &__details {
    width: 50%;
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
}
.border-gold {
  &-1 {
    display: inline-block;
    border: 1px solid goldenrod;
    padding: 4px;
  }
  &-2 {
    border: 1px solid goldenrod;
    padding: 24px;
  }
}
</style>
