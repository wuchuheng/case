<template>
  <div>
    <div class="headerWrapper">
      <div class="title">- {{title}} -</div>
      <div class="actionWrapper">
        <button @click="handleShowDetail">
          <div> <div> 查看详情 </div> <div class="iconfont icon-right"></div> </div>
        </button>
        <button class="download">
          <div> <div> 下载演示 </div> <div class="iconfont icon-right"></div> </div>
        </button>
      </div>
    </div>
    <div class="contentWrapper">
      <div> <img src="../../assets/images/caseBanner@2x.png" /> </div>
      <div>
        <div class="desc">{{desc}}</div>
        <div class="showDetail"></div>
      </div>
      <div>
        <img src="../../assets/images/example1@2x.png" />
        <img src="../../assets/images/example2@2x.png" />
        <img src="../../assets/images/example3@2x.png" />
        <img src="../../assets/images/example4@2x.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '../../icons/components/right'
import VueSvgIcon from "vue-svgicon";

import {Options, Vue} from "vue-class-component";
@Options({
  components: {VueSvgIcon}
})
export default class ItemRender extends Vue {
  public id = 1
  public desc = '一款潮流人士专用的软件，具备商城，短视频，社区，租赁等功能，一款深受潮人喜爱的软件，专门发布一些关于潮流穿搭的资讯，给潮人推荐一些潮流的衣服、包包、潮鞋、享受零元租，和限时秒杀等活动。 '
  public title = '领潮APP'

  handleShowDetail() {
      this.$router.push(`/detail/${this.id}`)
  }
}
</script>

<style lang="scss" scoped>
@import "../../index";
.headerWrapper {
  @include flex;
  @include justify-between;
  @include items-center;
  @include w-full;
  @include my-1;
  .actionWrapper {
    button:last-child {
      @include ml-5;
    }
    button:last-child {
      @include text-white;
      background: $themeColor;
    }
    button {
      cursor: pointer;
      @include h-6;
      @include w-21;
      @include border-0;
      @include rounded;
      @include text-gray-500;
      >div {
        align-items: center;
        @include justify-center;
        @include flex;
      }
    }
  }
  .title {
    @include bg-red;
    @include p-0_5;
    background: $themeColor;
    @include text-white;
    @include text-3;
    @include py-0_5;
    @include px-2;
    @include h-2;
  }
}

.contentWrapper {
  @include flex;
  @include w-full;
  @include h-50;
  @include py-1;
  border-bottom: solid px2rem(1);
  @include border-gray-200;
  $divNo1Width:30%;
  $divNo2Width:30%;
  $divNo3Width: 100% - $divNo1Width - $divNo2Width;
  div:first-child{
    width: $divNo1Width;
    >img {
      width: 100%;
      height: 100%;
    }
  }
  div:nth-child(2){
    width: $divNo2Width;
    @include text-gray-500;
    @include px-5;
    box-sizing: border-box;
    position: relative;
    div:first-child {
      @include h-full;
      @include w-full;
    }
    .showDetail {
      position: absolute;
      height: px2rem(8);
      @include w-15;
      background: #8D94EC;
      bottom: 0;
      right: px2rem(80);
    }
  }
  div:nth-child(3){
    width: $divNo3Width;
    @include flex;
    @include h-full;
    @include justify-between;
  }
  .desc {
    line-height: px2rem(60);
  }
}
</style>