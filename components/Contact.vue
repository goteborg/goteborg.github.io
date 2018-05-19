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
          v-on:submit.prevent="onSubmit"
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
          <button
            type="submit"
            class="right"
            color="primary"
          >
            Wyslij
          </button>
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
    onSubmit (e) {
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
      e.preventDefault()
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
.section {
  background-color: $white;
  color: $black;
  &__title {
    color: $black;
  }
  // background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2638' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
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
  color: $black;
  &__input {
    display: flex;
    flex: 1;
    height: 30px;
    margin: 0;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid $black;
    margin-bottom: 30px;
    outline: none;
    &--textarea {
      height: auto;
    }
  }
  button {
    background-color: $black;
    color: $white;
    padding: 12px 15px;
    width: 200px;
    margin: 0 auto;
  }
}
</style>
