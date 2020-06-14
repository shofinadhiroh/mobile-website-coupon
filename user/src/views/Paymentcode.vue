<template>
  <div class="paymentcode">
    <Paymentcode />
  </div>
</template>

<script>
// @ is an alias to /src
import Paymentcode from "@/components/Paymentcodepage.vue";

export default {
  name: "paymentcode",
  components: {
    Paymentcode
  }
};
</script>

<style>
.paymentcode {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: grey;
}
</style>
