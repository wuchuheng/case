<template>
  <div class="main">
    <div class="center">
      <img src="../../assets/images/caseIcon3@2x.png" />
      <div class="nav">
        <div v-for="(e, i) in navs" :key="i"> {{e.title}} </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {
  public navs: {title: string}[]  = [
    {title: '社交'},
    {title: '商城'},
    {title: '直播'},
    {title: '社交'},
    {title: '商城'},
    {title: '直播'},
  ]
}

</script>

<style lang="scss" scoped>
@import "../../index";
.main {
  background: $themeColor;
  @include flex;
  @include w-full;
  @include h-14;
  @include justify-center;
  .center {
    width: $contentWidth;
    @include py-1;
    @include flex;
    @include flex-col;
    @include justify-between;
    @include border-box;
    .nav {
      @include flex;
      @include w-full;
      > div {
        @include w-40;
        @include text-white;
      }
    }
    > img {
      @include w-25;
    }
  }
}
</style>