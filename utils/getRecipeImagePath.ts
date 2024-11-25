import { recipes } from '../data/recipeDetails'
import type { Recipe } from '../types'

export function getRecipeImagePath(recipe: Recipe): string {
  return `/img/${recipe.id}.${recipe.imageExtension}`
}