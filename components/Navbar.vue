<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-menu">
      <nuxt-link
        v-for="(item, index) in nav"
        :key="index"
        v-bind:to="item.link"
        class="navbar-item"
      >{{item.text}}</nuxt-link>
      <nuxt-link to="/" class="navbar-logo">
        <span>GOTEBORG</span>
        <span> STUDIO</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          link: 'o-nas',
          text: 'O nas',
          anchor: true
        },
        {
          link: 'projekty',
          text: 'Projekty',
          anchor: true
        },
        {
          link: 'jak-pracujemy',
          text: 'Jak działamy',
          anchor: true
        },
        {
          link: 'cennik',
          text: 'Cennik',
          anchor: true
        },
        {
          link: 'kontakt',
          text: 'Kontakt',
          anchor: true
        }
      ]
    }
  },
  created () {
    this.nav.map(item => {
      item.link = item.anchor ? `/#${item.link}` : `/${item.link}`
    })
  }
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  &-item {
    padding: 10px 20px;
    font-family: $ff-primary;
    &:hover {
      background-color: $black;
      color: $white;
    }
  }
  &-logo {
    padding: 10px 20px;
    span:first-of-type {
      font-family: 'Poiret One', cursive;
      font-weight: bold;
    }
    @media (max-width: $tablet) {
      display: none;
    }
  }
  @media (max-width: $phone) {
    display: none;
  }
}
</style>
