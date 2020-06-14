<template>
  <div class="createbirthday">
    <Createbirthday />
  </div>
</template>

<script>
// @ is an alias to /src
import Createbirthday from "@/components/Createbirthdaypage.vue";

export default {
  name: "createbirthday",
  components: {
    Createbirthday
  }
};
</script>

<style>
.createbirthday {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
