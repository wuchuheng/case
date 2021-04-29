<template>
  <div class="home">
    <ItemRender
        v-for="i in 10"
        :key="i"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ItemRender from './ItemRender.vue'

@Options({
  components: {
    ItemRender
  },
})
export default class Home extends Vue {}
</script>
