<template>
  <div class="createpassword">
    <Createpassword />
  </div>
</template>

<script>
// @ is an alias to /src
import Createpassword from "@/components/Createpasswordpage.vue";

export default {
  name: "createpassword",
  components: {
    Createpassword
  }
};
</script>

<style>
.createpassword {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
