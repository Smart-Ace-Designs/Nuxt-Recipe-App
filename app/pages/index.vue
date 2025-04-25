<script setup lang="ts">
import { type RecipeResponse } from "~~/types/types";

const { data, error } = await useFetch<RecipeResponse>("https://dummyjson.com/recipes?limit=6");
const recipesByRating = computed(() => {
  return data.value?.recipes.sort((a, b) => {
    return b.rating - a.rating;
  });
});
</script>

<template>
  <main>
    <section class="bg-theme-hero-gray">
      <div class="container flex flex-col items-center gap-10 py-20 lg:flex-row">
        <div class="order-2 flex-1 text-center lg:order-1 lg:text-left">
          <h1 class="mb-6 text-balance text-4xl font-extrabold lg:text-6xl">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="mb-8 text-balance text-xl lg:text-2xl">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <BaseButton to="/recipes">Browse Recipes</BaseButton>
        </div>
        <div class="order-1 flex-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:667px"
            src="/nuxt-course-hero.png"
            densities="x1"
            format="webp"
            alt="Main Course"
          />
        </div>
      </div>
    </section>

    <section class="container py-20">
      <h2 class="mb-2 text-3xl lg:text-5xl">Discover, Create, Share</h2>
      <p class="mb-8 text-lg lg:text-xl">Check out our most popular recipes!</p>
      <div v-if="!error" class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <RecipeCard v-for="recipe in recipesByRating" :key="recipe.id" :recipe="recipe" />
      </div>
      <p v-else class="text-xl text-red-500">Opps, something went wrong. Please try again later.</p>
    </section>
  </main>
</template>
