<template>
  <div class="redeemeddetail">
    <Redeemeddetail />
  </div>
</template>

<script>
// @ is an alias to /src
import Redeemeddetail from "@/components/Redeemeddetailpage.vue";

export default {
  name: "redeemeddetail",
  components: {
    Redeemeddetail
  }
};
</script>

<style>
.redeemeddetail {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
