<template>
  <div class="myaccount">
    <Myaccount />
  </div>
</template>

<script>
// @ is an alias to /src
import Myaccount from "@/components/Myaccountpage.vue";

export default {
  name: "myaccount",
  components: {
    Myaccount
  }
};
</script>

<style>
.myaccount {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: grey;
}
</style>
