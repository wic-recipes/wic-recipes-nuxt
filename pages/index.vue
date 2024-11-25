<template>
  <main class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Find a Recipe</h2>
    <p class="mt-4 text-base text-gray-500">
      Find a tasty, affordable, WIC-friendly recipe.
      <NuxtLink to="/recipes" class="inline-flex items-center underline decoration-gray-500">
        See All Recipes
        <ArrowRightIcon class="size-6 ml-1" />
      </NuxtLink>
    </p>

    <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
      <NuxtLink v-for="recipe in featuredRecipes" :key="recipe.id" :to="`/recipe/${recipe.id}`" class="group block">
        <img :src="getRecipeImagePath(recipe)" :alt="recipe.title" class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6] shadow-md" />
        <h3 class="mt-4 text-base font-semibold text-gray-900">{{ recipe.title }}</h3>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import type { Recipe } from '@/types'

const featuredRecipes: Recipe[] = getFeaturedRecipes()
</script>