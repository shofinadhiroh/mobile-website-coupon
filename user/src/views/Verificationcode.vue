<template>
  <div class="verificationcode">
    <Verificationcode />
  </div>
</template>

<script>
// @ is an alias to /src
import Verificationcode from "@/components/Verificationcodepage.vue";

export default {
  name: "verificationcode",
  components: {
    Verificationcode
  }
};
</script>

<style>
.verificationcode {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: grey;
}
</style>
