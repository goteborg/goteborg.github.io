<template>
  <section>
    <div>
      <Intro/>
      <About/>
      <Collab/>
      <Contact/>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Intro from '~/components/Intro.vue'
import About from '~/components/About.vue'
import Collab from '~/components/Collab.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Navbar,
    Intro,
    About,
    Collab,
    Contact
  }
}
</script>

<style>
@import "../sass/normalize.scss";
@import "../sass/base.scss";

body {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
