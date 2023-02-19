<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div
        class="input-field form-group"
        :class="{ error: v$.form.email.$errors.length }"
      >
        <input id="email" type="text" v-model="v$.form.email.$model" />
        <label for="email" class="form-label">Email</label>
        <div class="pre-icon os-icon os-icon-user-male-circle"></div>
        <small
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
          class="helper-text input-errors error-msg"
          >Email: {{ error.$message }}</small
        >
      </div>
      <!-- ====== -->
      <div
        class="input-field form-group"
        :class="{ error: v$.form.password.$errors.length }"
      >
        <input
          id="password"
          type="password"
          v-model="v$.form.password.$model"
        />
        <div class="pre-icon os-icon os-icon-fingerprint"></div>
        <label for="password" class="form-label">Пароль</label>
        <small
          v-for="(error, index) of v$.form.password.$errors"
          :key="index"
          class="helper-text input-errors error-msg"
          >Password: {{ error.$message }}</small
        >
      </div>
      <!-- ====== -->
    </div>
    <div class="card-action">
      <div>
        <button
          :disabled="v$.form.$invalid"
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>
.error-msg {
  color: red;
}
.form-label {
  color: rgba(153, 235, 21, 0.867);
}
</style>

<script>
import { required, email, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import M from "materialize-css/dist/js/materialize.min";
import messages from "@/utils/messages";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      auth: getAuth(),
      errorM: "",
    };
  },

  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },

  mounted() {
    if (messages[this.$route.query.message]) {
      const toastHTML =
        '<span style="color: yellow; text-transform: uppercase;">You are logged out</span>';
      M.toast({ html: toastHTML });
    }
  },

  methods: {
    submitHandler() {
      signInWithEmailAndPassword(this.auth, this.form.email, this.form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user:", user);
          this.$router.push("/");
        })
        .catch(() => {
          const errorHTML = `<span style="color: yellow; text-transform: uppercase;">USER not found</span>`;
          M.toast({ html: errorHTML });
        });
    },
  },
};
</script>
