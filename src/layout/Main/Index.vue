<template>
  <div class="main">
    <Header />
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/layout/Main/Header";
export default {
name: "Main",
  components: {Header}
}
</script>

<style lang="scss" scoped>
@import "../../index";
.content {
  @include w-full;
  @include flex;
  @include justify-center;
  > div {
    width: $contentWidth;
  }
}
</style>