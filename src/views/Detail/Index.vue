<template>
  <div class="main">
    <div class="headerWrapper">
      <img src="../../assets/images/appIcon.png"/>
      <div>
        <div class="titleWrapper">
          <div>APP名称</div>
          <div>
            (支持:手机(安卓) | 账号：微信登录)
          </div>
        </div>
        <div class="desc">{{desc}}</div>
      </div>
    </div>
    <img src="../../assets/images/detail@2x@2x.png" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options()
export default class Index extends Vue {
  public desc = '一款专业情绪测评的软件，软件分双端用户端以及管理师分析端，用户可以将自己的情绪和想法通过图案画出来后拍照上传到平台，管理师收到任务订单后会对用户所提供的图案进行分析当前的一个状况，运势、家庭、工作、学习等分析。具备商城功能可推荐用户建议用户购买某些物品来提升自身的运势。'
}
</script>

<style lang="scss" scoped>
@import "../../index";
.main {
  margin-top: px2rem(30);
  .headerWrapper {
    @include flex;
    @include w-full;
    >img {
      @include h-20;
      @include w-20;
    }
    >div {
      @include border-box;
      @include ml-2;
      @include flex;
      @include flex-col;
      >div:last-child { margin-top: px2rem(30); }

    }
    .titleWrapper {
      @include flex;
      >div:last-child {
        color: $themeColor;
        margin-left: px2rem(30);
      }
      >div:first-child {
        font-weight: 900;
      }
    }
  }
  .desc {
    line-height: px2rem(70);
    @include text-gray-500;
  }
  >img {
    margin-top: px2rem(30);
    @include w-full;
    @include h-full;
  }
}
</style>