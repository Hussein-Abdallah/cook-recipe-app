import { StyleSheet, ScrollView } from "react-native";
import { RecipeCard } from "./RecipeCard";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { Recipe, RootStackParamList } from "../types";

interface Props {
  recipes: Recipe[];
  navigation: StackNavigationProp<RootStackParamList, "Recipes">;
}
export function RecipesList({ recipes, navigation }: Props) {
  return (
    <ScrollView showsHorizontalScrollIndicator>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          image={recipe.image}
          onPress={() => navigation.navigate("Recipe", { recipe })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
