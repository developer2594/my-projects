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
      <!-- ===== -->
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
      <!-- ======= -->
      <div class="input-field">
        <input id="name" type="text" v-model="v$.form.name.$model" />
        <label for="name" class="form-label">Имя</label>
        <small
          v-for="(error, index) of v$.form.name.$errors"
          :key="index"
          class="helper-text input-errors error-msg"
          >Password: {{ error.$message }}</small
        >
      </div>
      <!-- ======== -->
      <p>
        <label>
          <input type="checkbox" v-model="v$.form.agree.$model" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          :disabled="v$.form.$invalid"
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="login">Войти!</router-link>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
        agree: false,
      },
      auth: getAuth(),
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
        name: { required, min: minLength(4) },
        agree: { checked: (v) => v },
      },
    };
  },

  methods: {
    submitHandler() {
      createUserWithEmailAndPassword(
        this.auth,
        this.form.email,
        this.form.password
      );

      this.$router.push("/");
    },
  },
};
</script>
