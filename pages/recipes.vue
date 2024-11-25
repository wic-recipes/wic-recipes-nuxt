<template>
  <nav class="h-full overflow-y-auto max-w-lg mx-auto" aria-label="Directory">
    <div v-for="category in categories" :key="category" class="relative">
      <div class="sticky top-0 z-10 border-y border-t-stone-300 border-b-stone-300 bg-stone-200 px-3 py-1.5 text-sm/6 font-semibold">
        <h3>{{ category }}</h3>
      </div>
      <ul role="list" class="divide-y divide-gray-100">
        <li v-for="recipe in categoryRecipes(category)" :key="recipe.id" class="flex gap-x-4 px-3 py-5">
          <img class="size-24 rounded flex-none object-cover shadow-md" :src="getImagePath(recipe.id, recipe.imageExtension)" :alt="recipe.title" />
          <NuxtLink :to="`/recipe/${recipe.id}/`" class="w-full min-h-full flex items-center justify-between">
            <div>
              <p class="text-md font-semibold text-gray-900">
                {{ recipe.title }}
              </p>
              <div>
                <p class="mt-1 truncate text-xs/5 text-gray-500">{{ recipe.time }}</p>
                <p class="mt-1 truncate text-xs/5 text-gray-500">{{ recipe.ingredients.length + ' ingredients' }}</p>
              </div>
            </div>
            <div class="flex shrink-0 items-center gap-x-4">
              <ChevronRightIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Recipe } from '@/types'

const recipes: Recipe[] = getRecipes()
const categories = getCategories()
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const getImagePath = (recipeId: string, extension:string) => `/img/${recipeId}.${extension}`

const categoryRecipes = (category: string) => recipes.filter(r => r.category === category).sort((a, b) => {
  if (a.id < b.id) return -1
  else if (a.id > b.id) return 1
  return 0
})
</script>
