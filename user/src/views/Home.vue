<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Homepage.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
