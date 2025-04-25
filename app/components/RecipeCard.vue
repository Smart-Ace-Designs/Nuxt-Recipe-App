<script lang="ts" setup>
import { type Recipe } from "~~/types/types";

defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <div class="flex flex-col rounded-md shadow">
    <NuxtImg
      :src="recipe.image"
      :alt="recipe.name"
      sizes="xs:100vw sm:50vw lg:400px"
      format="webp"
      densities="x1"
      class="rounded-t-md"
    />
    <div class="flex flex-1 flex-col px-4 py-6">
      <p class="mb-2 text-xl font-semibold lg:text-2xl">
        {{ recipe.name }}
      </p>
      <div class="mb-4 mt-auto flex w-full gap-8 bg-white/80 text-lg font-normal lg:text-xl">
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" class="text-theme-dodgeroll-gold" />
          <span>{{ recipe.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" class="text-theme-dodgeroll-gold" />
          <span>{{ recipe.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" class="text-theme-dodgeroll-gold" />
          <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
        </div>
      </div>
      <BaseButton :to="`/recipe/${recipe.id}`">View</BaseButton>
    </div>
  </div>
</template>
