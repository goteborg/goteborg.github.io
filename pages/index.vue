<template>
  <section>
    <div>
      <Intro/>
      <Projects />
      <Collab/>
      <About/>
      <Cennik/>
      <Contact/>
      <PrivacyBar />
    </div>
  </section>
</template>

<script>
import Intro from '~/components/Intro.vue'
import Projects from '~/components/Projects.vue'
import About from '~/components/About.vue'
import Collab from '~/components/Collab.vue'
import Cennik from '~/components/Cennik.vue'
import Contact from '~/components/Contact.vue'
import PrivacyBar from '~/components/PrivacyBar.vue'

export default {
  components: {
    Intro,
    Projects,
    About,
    Collab,
    Cennik,
    Contact,
    PrivacyBar
  }
}
</script>

<style>
@import "../sass/normalize.scss";
@import "../sass/base.scss";

body {
  max-width: 1080px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: repeat;
  background-image: url("~/assets/concrete-texture.png");
}
</style>
