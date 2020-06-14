<template>
  <div class="forgotpassword">
    <Forgotpassword />
  </div>
</template>

<script>
// @ is an alias to /src
import Forgotpassword from "@/components/Forgotpasswordpage.vue";

export default {
  name: "forgotpassword",
  components: {
    Forgotpassword
  }
};
</script>

<style>
.forgotpassword {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
