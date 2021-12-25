<template>
  <div class="home">
    <VirtualKeyboard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import VirtualKeyboard from '@/components/VirtualKeyboard.vue' // @ is an alias to /src

@Options({
  components: {
    VirtualKeyboard
  }
})
export default class Home extends Vue {}
</script>
