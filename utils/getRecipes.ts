import { recipes } from '../data/recipeDetails'
import type { Recipe } from '../types'


export function getRecipes(): Recipe[] {
  return recipes
}