<template>
  <div class="section" id="kontakt">
    <h1 class="section__title">Kontakt</h1>
    <div class="mt-5">
      <v-flex class="contact-form-wrapper">
        <v-form
          ref="form"
          name="contact"
          data-netlify="true"
        >
          <div>
          <v-text-field
            name="name"
            label="Imię Nazwisko"
            v-model="name"
            :rules="nameRules"
            :counter="100"
            class="input-group--focused"
            dark
          ></v-text-field>
          <v-text-field
            name="email"
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            class="input-group--focused"
            required
            dark
          ></v-text-field>
          <v-text-field
            name="message"
            label="Wiadomość"
            v-model="message"
            class="input-group--focused"
            dark
            multi-line
          ></v-text-field>
          </div>
          <v-btn
            class="right"
            color="primary"
            @click="submit"
          >
            Wyslij
          </v-btn>
        </v-form>
      </v-flex>
    </div>
  </div>
</template>

<script>
function encode (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default {
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 100 || 'Name must be less than 100 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: ''
    }
  },
  methods: {
    submit (e) {
      console.log('submitting form...')
      if (this.$refs.form.validate()) {
        this.$axios.post('/', {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            name: this.name,
            email: this.email,
            message: this.message
          })
        })
      } else {
        console.log('Form could not be sent.')
      }
      e.preventDefault()
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
.section {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2638' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
}
.contact-form-wrapper {
  padding: 0 50px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
