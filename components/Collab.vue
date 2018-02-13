<template>
  <div class="section" id="jak-pracujemy">
    <h1 class="section__title mb-5">Jak Pracujemy</h1>
    <v-layout row wrap class="section__description">
      <v-flex xs12 md6 class="packet packet--light">
        <h2 class="display-1 mb-4 text-xs-center">Pakiet Light</h2>
        <PacketLight />
      </v-flex>
      <v-flex xs12 md6 class="packet packet--bold">
        <h2 class="display-1 mb-4 text-xs-center">Pakiet Bold</h2>
        <PacketBold />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PacketLight from '~/components/Packets/Light.vue'
import PacketBold from '~/components/Packets/Bold.vue'

export default {
  components: {
    PacketLight,
    PacketBold
  }
}
</script>

<style scoped lang="scss">
.section {
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: $ff-primary;
  color: $white;
  background-color: #c5283d;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff4242' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  &__title {
    padding-left: 100px;
    font-size: $biggest;
    color: transparentize($white, 0.2);
  }
  &__description {
    padding: 0 100px;
  }
}
.packet {
  &--light {
    background-color: transparentize(#ff4242, 0.2);
  }
  &--bold {
    background-color: transparentize(#ff4242, 0.2);
  }
  h2 {
    color: $white;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #c5283d;
  }
}
</style>