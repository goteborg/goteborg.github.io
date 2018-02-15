<template>
  <div class="section" id="kontakt">
    <h1 class="section__title text-xs-right">Kontakt</h1>
    <div class="mt-5">
      <v-flex xs6 offset-xs0 offset-xs3>
        <v-form name="contact" netlify>
          <v-text-field
            label="Imię Nazwisko"
            v-model="name"
            :rules="nameRules"
            :counter="100"
            class="input-group--focused"
            required
            dark
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            class="input-group--focused"
            required
            dark
          ></v-text-field>
          <v-text-field
            name="input-7-1"
            label="Wiadomość"
            class="input-group--focused"
            dark
            multi-line
          ></v-text-field>
          <v-btn
            class="right"
            color="primary"
          >
            Wyslij
          </v-btn>
        </v-form>
      </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 100 || 'Name must be less than 100 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: $black;
  color: $white;
  font-family: $ff-primary;
  &__title {
    padding-right: 100px;
    font-size: $biggest;
  }
}
.contact-form-wrapper {
  max-width: 500px;
}
</style>
