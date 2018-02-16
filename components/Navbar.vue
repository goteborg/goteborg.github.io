<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <a v-if="$route.name !== 'index'" class="navbar-item" href="">
        <img src="" alt="" width="112" height="28">
        <h1>GOTEBORG</h1>
        <h2>STUDIO</h2>
      </a>
    </div>
    <div class="navbar-menu">
      <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
      <nuxt-link to="/#o-nas" class="navbar-item">O nas</nuxt-link>
      <nuxt-link to="/#jak-pracujemy" class="navbar-item">Jak działamy</nuxt-link>
      <nuxt-link to="/cennik" class="navbar-item">Cennik</nuxt-link>
      <nuxt-link to="/#kontakt" class="navbar-item">Kontakt</nuxt-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  &-item {
    padding: 10px 20px;
    &:hover {
      background-color: $black;
      color: $white;
    }
  }
  @media (max-width: $phone) {
    display: none;
  }
}
</style>
