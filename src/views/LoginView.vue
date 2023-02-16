<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" class="validate" />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
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

<script>
// import { useVuelidate } from "@vuelidate/core";
// import { required, email, minLenght } from "@vuelidate/validators";
// export default {
//   setup() {
//     return { $v: useVuelidate };
//   },
//   name: "logIn",
//   data: () => ({
//     email: "",
//     password: "",
//   }),
//   validations: {
//     email: { email, required },
//     password: { required, minLenght: minLenght(6) },
//   },
//   methods: {
//     submitHandler() {
//       if (this.$v.$invalid) {
//         this.$v.$touch();
//         return;
//       }
//       this.$router.push("/");
//     },
//   },
// };
//
</script>
