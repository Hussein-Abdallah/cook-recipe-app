export type Recipe = {
  id: number;
  title: string;
  category: number;
  cuisine: string;
  ingredients: string[];
  directions: string;
  nutrition: {
    serving_size: string;
    calories: number;
    fat: {
      total: number;
      saturated_fat: number;
      trans_fat: number;
      polyunsaturated_fat: number;
      monounsaturated_fat: number;
    };
    cholesterol: number;
    sodium: number;
    carbohydrates: {
      total: number;
      dietary_fiber: number;
      sugars: number;
    };
    protein: number;
    vitamins: {
      vitamin_d: number;
      calcium: number;
      iron: number;
      potassium: number;
      vitamin_a: number;
      vitamin_c: number;
    };
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
