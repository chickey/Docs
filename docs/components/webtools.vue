<template>
    <button @click="onClick">Install</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const onClick = ():void => {
    count.value++
}
</script>

<script type="module" src="https://unpkg.com/esp-web-tools@3.4.2/dist/web/install-button.js?module"></script>
