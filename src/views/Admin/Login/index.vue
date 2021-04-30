<template>
  <div class="flex flex-col h-screen bg-primaryBack">
    <div class="p-5 shadow-xl">header</div>
    <div class="flex-1 flex justify-center items-center">
      <form class="w-96 grid grid-cols-1 gap-4">
        <div class="text-2xl text-center">登录</div>
        <Input label="账号登录" v-model="value" />
        <div>登录</div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Input from "@/components/Input/Input.vue";
export default {
  components: {Input},
  data(): {value: string} {
    return {
      value: 'hello'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>