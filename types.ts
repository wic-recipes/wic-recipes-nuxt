export type RecipeDirectionsSection = {
  title: string,
  steps: string[]
}

export type RecipeIngredientsSection = {
  title: string,
  items: string[]
}

export type Recipe = {
  id: string,
  title: string,
  category: string,
  imageExtension: string,
  servings: string | number,
  source: string,
  time: string,
  directions: string[] | RecipeDirectionsSection[],
  ingredients: string[] | RecipeIngredientsSection[],
  sauceTitle?: string,
  sauceIngredients?: string[],
  optionalToppings?: string[],
  servingInstructions?: string[],
  notes?: string[],
  mixinIdeas?: string[]
}