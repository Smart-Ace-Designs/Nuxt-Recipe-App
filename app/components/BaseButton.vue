<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="bg-theme-dodgeroll-gold cursor-pointer self-start rounded-md px-4 py-2 text-lg text-white"
  >
    <slot />
  </NuxtLink>
</template>
