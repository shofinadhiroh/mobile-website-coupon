<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Loginpage.vue";

export default {
  name: "login",
  components: {
    Login
  }
};
</script>

<style>
.login {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
