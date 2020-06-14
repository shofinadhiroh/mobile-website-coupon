<template>
  <div class="creategender">
    <Creategender />
  </div>
</template>

<script>
// @ is an alias to /src
import Creategender from "@/components/Creategenderpage.vue";

export default {
  name: "creategender",
  components: {
    Creategender
  }
};
</script>

<style>
.creategender {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
