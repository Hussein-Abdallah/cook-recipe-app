export type Recipe = {
  id: number;
  title: string;
  category: number;
  cuisine: string;
  ingredients: string[];
  directions: string;
  nutrition: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
  preparation_time: number;
  cooking_time: number;
  difficulty: string;
  image: string;
  created_at: string;
};

export type RootStackParamList = {
  Recipes: { title?: string };
  Recipe: { recipe: Recipe };
  // Add more screen names and their corresponding parameter types here
};
