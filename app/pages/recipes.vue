<script lang="ts" setup>
import { type RecipeResponse } from "~~/types/types";

const { data, error } = await useFetch<RecipeResponse>("https://dummyjson.com/recipes");

const sortType = ref<"name" | "rating">("rating");
const currentView = ref<"recipesByName" | "recipesByRating">("recipesByName");
const sortRecipes = () => {
  sortType.value === "name" ? (sortType.value = "rating") : (sortType.value = "name");
  currentView.value === "recipesByName"
    ? (currentView.value = "recipesByRating")
    : (currentView.value = "recipesByName");
};

const recipesByName = computed(() =>
  data.value?.recipes.slice().sort((a, b) => a.name.localeCompare(b.name)),
);
const recipesByRating = computed(() =>
  data.value?.recipes.slice().sort((a, b) => b.rating - a.rating),
);
const sortedRecipes = computed(() =>
  currentView.value === "recipesByName" ? recipesByName.value : recipesByRating.value,
);
</script>

<template>
  <main>
    <section class="container py-10">
      <h1 class="mb-2 text-3xl lg:text-5xl">Discover, Create, Share</h1>
      <p class="mb-8 text-lg lg:text-xl">Check out our entire list of recipes!</p>
      <div class="mb-4 flex justify-end">
        <button
          @click="sortRecipes"
          class="bg-theme-dodgeroll-gold cursor-pointer self-start rounded-md px-4 py-2 text-lg text-white"
        >
          Sort by {{ sortType }}
        </button>
      </div>
      <div v-if="!error" class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <RecipeCard v-for="recipe in sortedRecipes" :key="recipe.id" :recipe="recipe" />
      </div>
      <p v-else class="text-xl text-red-500">Opps, something went wrong. Please try again later.</p>
    </section>
  </main>
</template>
