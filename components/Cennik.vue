<template>
  <div class="section" id="cennik">
    <h1 class="section__title">Cennik</h1>
    <div class="section__description">
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Pakiet Light</h2>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>123 zł/m<sup>2</sup></h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Pakiet Bold</h2>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>299 zł/m<sup>2</sup></h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Shopping z projektantką</h2>
          <br />
          <span>
            Zakupy materiałów wykończeniowych, mebli oraz akcesoriów z naszym projektantem.
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>100 zł<sup>**</sup></h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Porada projektanta</h2>
          <br />
          <span>
            Genialne pomysły w trudnych sytuacjach. Po spotkaniu otrzymujecie Państwo brief, w którym wypisane są wszystkie kluczowe punkty.
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>100 zł<sup>**</sup></h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Szybkie metamorfozy</h2>
          <br />
          <span>
            Chcesz pomalować,  zostawić część mebli lub po prostu pragniesz metamorfozy bez totalnej demolki? To opcja dla Ciebie.Małym nakładem finansowym zrobimy z istniejących wnętrz istne perełki!
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>*</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Kompleksowe wykańczanie wnętrz dla deweloperów</h2>
          <br />
          <span>
            Nasz projekt, nadzór oraz opcjonalnie nasza ekipa budowlana.
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>*</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Projekty biurowców</h2>
          <br />
          <span>
            Projekty biur oraz przestrzeni publicznej dopasowane do potrzeb klienta, zorientowane na ergonomię i budżet.
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>*</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Architekt online</h2>
          <br />
          <span>
            Nie masz czasu na spotkanie z projektantem? To opcja dla Ciebie. Możemy spotkać się online.
            Po spotkaniu online otrzymujecie Państwo brief, w którym wypisane są wszystkie kluczowe punkty.
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>100 zł<sup>**</sup></h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="cennik-row">
        <v-flex xs8 class="cennik-col cennik-col--first">
          <h2 class="rooftop">Sprzedaż</h2>
          <br />
          <span>
            Oferujemy sprzedaż sprzętu AGD, lamp, mebli oraz akcesoriów.
          </span>
        </v-flex>
        <v-flex xs4 class="cennik-col cennik-col--second">
          <h2>*</h2>
        </v-flex>
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

<style scoped lang="scss">
@import "./common.scss";
.section {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2638' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
  &__title {
    text-align: left;
    padding-left: 100px;
    @media (max-width: $phone) {
      text-align: center;
      padding-left: 0;
    }
  }
  &__description {
    padding: 48px 100px 48px 100px;
    @media (max-width: $tablet) {
      margin-top: 48px;
      padding: 20px 50px;
    }
    @media (max-width: $phone) {
      padding: 20px 48px;
    }
  }
}
.cennik-row {
  margin-bottom: 1px;
  &:first-child {
    border-top: 25px solid transparentize(white, 0.2);;
  }
}
.cennik-col {
  color: $black;
  background-color: transparentize(white, 0.2);
  padding-top: 15px;
  padding-bottom: 12px;
  @media (max-width: $tablet) {
    padding-left: 25px;
  }
  h2 {
    color: $black;
    margin: 0;
    padding: 0;
    display: inline-block;
    text-align: center;
    position: relative;
    font-size: 26px;
    font-weight: normal;
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
      @media (max-width: $tablet) {
        margin-right: 25px;
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
  }
}
</style>