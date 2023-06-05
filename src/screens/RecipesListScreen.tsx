import { StyleSheet, ScrollView, Text } from "react-native";
import { RecipeCard } from "../components/RecipeCard";

import { recipes } from "../data/recipes.json";
import { Screen } from "../components/Screen";
import { RootStackParamList } from "../navigation/types/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

type RecipesListScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recipes">;
};

export function RecipesListScreen({ navigation }: RecipesListScreenProps) {
  return (
    <Screen>
      <>
        <Text>Tabs</Text>
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
      </>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
