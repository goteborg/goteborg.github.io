<template>
  <div class="section" id="cennik">
    <h1 class="section__title">Cennik</h1>
    <div class="section__description">
      <v-layout
        row
        wrap
        class="cennik-row"
        v-for="(item, index) in priceListItems"
        :key="index"
      >
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">{{ item.title }}</h2>
          <br />
          <span>{{ item.description }}</span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>
            {{ item.price }}
            <sup v-if="item.hourly">**</sup>
          </h2>
        </v-flex>
        <span>{{ item.description }}</span>
      </v-layout>
      <v-layout>
        <v-flex class="cennik-col--legend">
          <span>wycena indywidualna&nbsp;&nbsp; *</span><br/>
          <span>cena za każdą rozpoczętą godzinę **</span>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import priceList from '../static/priceList.json'

export default {
  data () {
    return {
      priceListItems: priceList
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
.section {
  padding-top: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2638' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
  &__description {
    padding-top: 0;
  }
  &__title {
    text-align: left;
    background-color: transparentize(white, 0.8);
    padding: 24px 100px 24px 80px;
    @media (max-width: $phone) {
      text-align: center;
      padding-right: 0;
      padding-left: 0;
    }
  }
}
.cennik-row {
  border-bottom: 1px solid transparentize(white, 0.8);
  > span {
    display: none;
    color: darken($white, 40%);
    padding-left: 25px;
    padding-bottom: 12px;
    padding-right: 12px;
    @media (max-width: $phone) {
      display: block;
    }
  }
}
.cennik-col {
  padding-top: 15px;
  padding-bottom: 12px;
  @media (max-width: $tablet) {
    padding-left: 25px;
  }
  h2 {
    color: $white;
    margin: 0;
    padding: 0;
    display: inline-block;
    text-align: center;
    position: relative;
    font-size: $big;
    font-weight: normal;
  }
  span {
    color: darken($white, 40%);
    @media (max-width: $phone) {
      display: none;;
    }
  }
  &--first {
    h2 {
      text-align: left;
      &:before, &:after {
        content: '';
        position: absolute;
        background-color: transparentize($black, 0.5);
      }
      &:before {
        top: 0;
        left: -7px;
        width: 2px;
        height: 20px;
      }
      &:after {
        top: 0;
        left: -5px;
        width: 20px;
        height: 2px;
      }
    }
    padding-left: 80px;
    @media (max-width: $tablet) {
      padding-left: 25px;
    }
  }
  &--second {
    h2 {
      margin-right: 50px;
      margin-top: 0.5rem;
      @media (max-width: $tablet) {
        margin-right: 25px;
        font-size: $normal;
      }
    }
    padding-left: 80px;
    @media (max-width: $tablet) {
      padding-left: 10px;
    }
  }
  &--legend {
    text-align: right;
    margin-top: 20px;
    margin-right: 50px;
  }
}
</style>