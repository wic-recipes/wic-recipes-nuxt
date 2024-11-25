<template>
  <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold tracking-tight">{{ recipe.title }}</h1>

    <div class="mt-4 border-b border-stone-200 pb-5 text-sm sm:flex sm:justify-between">
      <dl class="flex">
        <dd class="font-medium inline-flex items-center"><ClockIcon class="size-6 mr-1"/> {{ recipe.time }}</dd>
        <dd class="ml-4 font-medium inline-flex items-center"><UsersIcon class="size-6 mr-1"/> {{ recipe.servings }} servings</dd>
      </dl>
    </div>

    <div class="mt-8">
      <div class="space-y-24">
        <div class="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 md:grid sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
          <div class="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
            <figure class="flex flex-col items-center">
              <img :src="getRecipeImagePath(recipe)" :alt="recipe.title" class="aspect-square w-full rounded-lg bg-stone-50 object-cover shadow-md" />
              <figcaption class="mt-2 text-xs text-stone-500">
                Recipe and photo by {{ recipe.source }}
              </figcaption>
            </figure>
          </div>
          <div class="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
            <dl class="grid grid-cols-1 gap-y-8 border-b border-stone-200 pb-8 sm:grid-cols-2 sm:gap-x-6 sm:pb-4">
              <div class="flex flex-col">
                <div class="mb-6">
                  <dt class="text-lg font-medium">Ingredients</dt>
                  <dd
                    v-if="hasIngredientSections"
                    class="mt-3 space-y-3"
                  >
                    <section v-for="section in recipe.ingredients" :key="section.title">
                      <h3 class="mt-4 uppercase">{{ section.title }}</h3>
                      <ul role="list" class="py-4">
                        <li v-for="item in section.items" :key="step" class="px-4 sm:px-0">
                          {{ item }}
                        </li>
                      </ul>
                    </section>
                  </dd>
                  <dd
                    v-else
                    class="mt-3 space-y-3"
                  >
                    <p v-for="ingredient in recipe.ingredients">{{ ingredient }}</p>
                  </dd>
                </div>
                <div v-if="recipe?.notes" class="mb-6">
                  <dt class="text-lg font-medium">Notes</dt>
                  <dd class="mt-3 space-y-3">
                    <p v-for="note in recipe.notes">{{ note }}</p>
                  </dd>
                </div>
                <p class="text-xs">*WIC-approved ingredients</p>
              </div>
              <div class="flex flex-col">
                <div v-if="recipe?.sauceTitle && recipe?.sauceIngredients" class="mb-6">
                  <dt class="text-lg font-medium">{{ recipe.sauceTitle }}</dt>
                  <dd class="mt-3 space-y-3">
                    <p v-for="ingredient in recipe.sauceIngredients">{{ ingredient }}</p>
                  </dd>
                </div>
                <div v-if="recipe?.optionalToppings" class="mb-6">
                  <dt class="text-lg font-medium">Optional Toppings</dt>
                  <dd class="mt-3 space-y-3">
                    <p v-for="topping in recipe.optionalToppings">{{ topping }}</p>
                  </dd>
                </div>
                <div v-if="recipe?.servingInstructions" class="mb-6">
                  <dt class="text-lg font-medium">For Serving</dt>
                  <dd class="mt-3 space-y-3">
                    <p v-for="instruction in recipe.servingInstructions">{{ instruction }}</p>
                  </dd>
                </div>
                <div v-if="recipe?.mixinIdeas" class="mb-6">
                  <dt class="text-lg font-medium">Mix-In Ideas</dt>
                  <dd class="mt-3 space-y-3">
                    <p v-for="idea in recipe.mixinIdeas">{{ idea }}</p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Directions -->
    <div class="mt-8">
      <h2 class="text-lg font-medium">Directions</h2>
      <div v-if="hasDirectionSections">
        <section v-for="section in recipe.directions" :key="section.title">
          <h3 class="mt-4 uppercase">{{ section.title }}</h3>
          <ul role="list" class="divide-y divide-stone-200">
            <li v-for="(step, index) in section.steps" :key="step" class="px-4 py-4 sm:px-0">
              {{ index+1 }}. {{ step }}
            </li>
          </ul>
        </section>
      </div>
      <ul v-else role="list" class="divide-y divide-stone-200">
        <li v-for="(step, index) in recipe.directions" :key="step" class="px-4 py-4 sm:px-0">
          {{ index+1 }}. {{ step }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
import type { Recipe } from '@/types'
import { ClockIcon, UsersIcon } from '@heroicons/vue/24/outline'

const recipe: Recipe = getRecipe(route.params.id)

const hasDirectionSections: Boolean = typeof recipe.directions?.[0] !== 'string'
const hasIngredientSections: Boolean = typeof recipe.ingredients?.[0] !== 'string'
</script>