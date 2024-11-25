import { recipes } from '../data/recipeDetails'
import type { Recipe } from '../types'

export function getRecipe(id: string | string[]): Recipe {
  if (Array.isArray(id)) {
    id = id[0]
  }
  return recipes.find(r => r.id === id)
}