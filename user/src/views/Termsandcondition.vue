<template>
  <div class="termsandcondition">
    <Termsandcondition />
  </div>
</template>

<script>
// @ is an alias to /src
import Termsandcondition from "@/components/Termsandconditionpage.vue";

export default {
  name: "termsandcondition",
  components: {
    Termsandcondition
  }
};
</script>

<style>
.termsandcondition {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
