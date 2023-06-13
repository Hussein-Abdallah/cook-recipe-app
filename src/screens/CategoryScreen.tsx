import { View, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { AppText, RecipesList } from "../components";
import { recipes } from "../data/recipes.json";
import { colors } from "../config";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  route?: RouteProp<RootStackParamList, "Category">;
  navigation?: StackNavigationProp<RootStackParamList, "Recipes">;
}
export function CategoryScreen({ route, navigation }: Props) {
  const { id } = route!.params;

  const searchRecipes = recipes.filter((recipe) => {
    return recipe.category === id;
  });

  return (
    <View>
      {searchRecipes.length === 0 && (
        <View style={styles.EmptyContainer}>
          <AppText style={styles.EmptyText}>No recipes found</AppText>
        </View>
      )}
      <RecipesList recipes={searchRecipes} navigation={navigation!} />
    </View>
  );
}

const styles = StyleSheet.create({
  EmptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  EmptyText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});
