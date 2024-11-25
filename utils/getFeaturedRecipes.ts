import { recipes } from '../data/recipeDetails'
import type { Recipe } from '../types'

function getRandomElements<T>(arr: T[], count: number): T[] {
  const result: T[] = [];
  const usedIndices = new Set<number>()

  if (count > arr.length) {
      throw new Error("Count cannot be greater than the array length.")
  }

  while (result.length < count) {
      const randomIndex = Math.floor(Math.random() * arr.length)
      if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex)
          result.push(arr[randomIndex])
      }
  }

  return result;
}

export function getFeaturedRecipes(): Recipe[] {
  return getRandomElements(recipes, 3)
}