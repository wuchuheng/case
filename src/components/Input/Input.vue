<template>
  <div class="w-full grid grid-cols-1 gap-4">
    <label v-if="label.length > 0">
      <div>{{label}}</div>
    </label>
    <input class="h-10 border-gray-300 border-solid border"
           v-model="test"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: { label: { type: String, default: '' } },
  model: { prop: 'value', event: 'change' },
  data() {
    return {
      test: 'hjello'
    }
  }
}
</script>

<style scoped>

</style>