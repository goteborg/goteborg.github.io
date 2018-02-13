<template>
  <section class="container">
    <div class="main-image"></div>
    <div class="price">
      <div class="section__title">Cennik</div>
      <div class="section__details">
        <div class="price-type">
          <span class="price-type__title">
            Pakiet
            <span class="light-font">Light</span>
          </span>
          <span class="price-type__details">
            od 79 zł/m<sup>2</sup>
          </span>
        </div>
        <div class="price-type">
          <span class="price-type__title">
            Pakiet
            <span class="bold-font">Bold</span>
          </span>
          <span class="price-type__details">
            od 129 zł/m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.nav__image {
  width: 50px;
}
.main-image {
  background-image: url('http://homeinspirationideas.net/wp-content/uploads/2014/12/Top-5-Gorgeous-White-Marble-Round-Dining-Tables-1.jpg');
  height: 200px;
  background-attachment: fixed;
}
.price {
  margin-top: 100px;
  font-family: 'Montserrat', sans-serif;
  background-color: black;
  color: white;

  .section__title {
    padding-top: 100px;
    padding-right: 100px;
    font-size: 4rem;
    text-align: right;
  }
  .section__details {

  }
  .price-type {
    margin: 100px;
    font-size: 2.5rem;
  }
  .price-type__title {
    padding: 30px;
    border: 1px solid white;
    .light-font {
      font-family: 'Poiret One', cursive;
    }
    .bold-font {
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
    }
  }
}
</style>

