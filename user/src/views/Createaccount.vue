<template>
  <div class="createaccount">
    <Createaccount />
  </div>
</template>

<script>
// @ is an alias to /src
import Createaccount from "@/components/Createaccountpage.vue";

export default {
  name: "createaccount",
  components: {
    Createaccount
  }
};
</script>

<style>
.createaccount {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
