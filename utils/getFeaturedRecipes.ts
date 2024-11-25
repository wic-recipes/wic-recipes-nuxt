import { recipes } from '../data/recipeDetails'
import type { Recipe } from '../types'

export function getFeaturedRecipes(): Recipe[] {
  const featuredRecipes = []
  const ids = [
    "peanut-butter-smoothie-bowl",
    "easy-kale-salad-with-fresh-lemon-dressing",
    "rainbow-peanut-noodles",
  ]

  for (const id of ids) {
    const featuredRecipe = recipes.find(r => r.id === id)

    if (featuredRecipe) {
      featuredRecipes.push(featuredRecipe)
    }
  }
  return featuredRecipes
}