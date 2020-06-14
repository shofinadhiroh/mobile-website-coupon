<template>
  <div class="paymentmethod">
    <Paymentmethod />
  </div>
</template>

<script>
// @ is an alias to /src
import Paymentmethod from "@/components/Paymentmethodpage.vue";

export default {
  name: "paymentmethod",
  components: {
    Paymentmethod
  }
};
</script>

<style>
.paymentmethod {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: grey;
}
</style>
