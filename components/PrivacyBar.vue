<template>
  <div v-if="isPrivacyBarDisplayed" class="bar">
    <p>Używamy cookies i podobnych technologii m.in. w celach: świadczenia usług, statystyk. 
      Szczegóły znajdziesz w 
      <a
        target="_blank"
        href="https://www.dropbox.com/s/2fjcecvkpo4usa8/POLITYKA%20PRYWATNO%C5%9ACI%20GOTEBORG-STUDIO%20RODO.pdf?dl=0">
        Polityce Prywatności
      </a>.
    </p>
    <div @click="closePrivacyBar">
      <div data-icon="ei-close" data-size="s"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPrivacyBarDisplayed: true
    }
  },
  methods: {
    closePrivacyBar (e) {
      this.isPrivacyBarDisplayed = false
    }
  }
}
</script>

<style scoped lang="scss">
  .bar {
    position: fixed;
    bottom: 50px;
    width: 80%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1);
    background: $black;
    color: $white;
    padding: 20px 40px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;

    p {
      margin: 0;
      padding: 0;
    }

    a {
      color: inherit;
      text-decoration: underline;
    }
  }
</style>