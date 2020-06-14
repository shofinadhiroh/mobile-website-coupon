<template>
  <div class="coupon">
    <Couponpage />
  </div>
</template>

<script>
// @ is an alias to /src
import Couponpage from "@/components/Couponpage.vue";

export default {
  name: "home",
  components: {
    Couponpage
  }
};
</script>
