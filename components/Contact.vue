<template>
  <div class="section" id="kontakt">
    <h1 class="section__title">Kontakt</h1>
    <div class="mt-5">
      <v-flex class="contact-form-wrapper">
        <form
          class="form"
          ref="form"
          name="contact"
          data-netlify="true"
        >
          <input
            type="text"
            placeholder="Imię Nazwisko"
            v-model="name"
            class="form__input"
          />
          <input
            type="text"
            placeholder="Email"
            v-model="email"
            class="form__input"
          />
          <textarea
            placeholder="Wiadomość"
            rows="10"
            v-model="message"
            class="form__input form__input--textarea"
          />
         <!-- <v-text-field
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
          ></v-text-field> -->
          <v-btn
            class="right"
            color="primary"
            @click="submit"
          >
            Wyslij
          </v-btn>
        </form>
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
      nameRule: (v) => !!v,
      email: '',
      emailRule: (v) => !!v,
      message: ''
    }
  },
  methods: {
    submit (e) {
      console.log('submitting form...')

      if (this.$refs.form.validate()) {
        console.log(this.name, this.email, this.message)
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
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__input {
    display: flex;
    flex: 1;
    height: 30px;
    margin: 0;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid $white;
    margin-bottom: 30px;
    outline: none;
    &--textarea {
      height: auto;
    }
  }
}
</style>
