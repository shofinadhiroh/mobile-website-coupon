<template>
  <div class="createusername">
    <Createusername />
  </div>
</template>

<script>
// @ is an alias to /src
import Createusername from "@/components/Createusernamepage.vue";

export default {
  name: "createusername",
  components: {
    Createusername
  }
};
</script>

<style>
.createusername {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
