<template>
  <div class="redeemdetail">
    <Redeemdetail />
  </div>
</template>

<script>
// @ is an alias to /src
import Redeemdetail from "@/components/Redeemdetailpage.vue";

export default {
  name: "redeemdetail",
  components: {
    Redeemdetail
  }
};
</script>

<style>
.redeemdetail {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
