<script setup lang="ts">
import { type Recipe } from "~~/types/types";

const { id } = useRoute().params;
const { data, error } = await useFetch<Recipe>(`https://dummyjson.com/recipes/${id}`);

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}

const ingredients = computed(() => {
  return data.value?.ingredients.map((ingredient: string) => ({
    original: ingredient,
    slug: slugify(ingredient),
  }));
});

const slugify = (text: string) => {
  return text
    .toString() // Ensure it's a string
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
};
</script>

<template>
  <div class="container flex max-w-screen-lg flex-col py-20">
    <!-- Header -->
    <div class="mb-6 flex flex-col">
      <h2 class="mb-4 text-5xl font-semibold">{{ data?.name }}</h2>
      <div class="mb-6 flex gap-4 text-xl">
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" class="text-theme-dodgeroll-gold" />
          <span>{{ data?.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" class="text-theme-dodgeroll-gold" />
          <span>{{ data?.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" class="text-theme-dodgeroll-gold" />
          <span>{{ data?.rating }} ({{ data?.reviewCount }})</span>
        </div>
      </div>
      <hr />
    </div>

    <!-- Image -->
    <NuxtImg
      :src="data?.image"
      densities="x1"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      class="mb-12 max-h-[500px] w-full rounded-md object-cover shadow-sm"
      alt=""
    />

    <!-- Ingredients -->
    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-semibold">Ingredients</h2>
      <ul class="grid grid-cols-1 gap-2 text-lg md:grid-cols-2">
        <li v-for="ingredient in ingredients" :key="ingredient.slug">
          <label class="flex items-center gap-2" :for="ingredient.slug">
            <input
              class="peer hidden"
              type="checkbox"
              :id="ingredient.slug"
              :name="ingredient.slug"
            />
            <div
              class="border-theme-dodgeroll-gold peer-checked:after:bg-theme-dodgeroll-gold relative flex h-6 w-6 items-center justify-center rounded-full border-2 peer-checked:after:absolute peer-checked:after:h-4 peer-checked:after:w-4 peer-checked:after:rounded-full"
            ></div>
            <span class="peer-checked:line-through">
              {{ ingredient.original }}
            </span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Instructions -->
    <div>
      <h2 class="mb-4 text-3xl font-medium">Instructions</h2>
      <ul class="flex flex-col gap-4 text-lg">
        <li v-for="(instruction, index) in data?.instructions" class="flex gap-2">
          <span
            class="bg-theme-dodgeroll-gold flex h-7 w-7 items-center justify-center rounded-full text-sm text-white"
          >
            {{ index + 1 }}
          </span>
          <span class="flex-1">{{ instruction }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
