<template>
  <div class="creditcard">
    <Creditcard />
  </div>
</template>

<script>
// @ is an alias to /src
import Creditcard from "@/components/Creditcardpage.vue";

export default {
  name: "creditcard",
  components: {
    Creditcard
  }
};
</script>

<style>
.creditcard {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
