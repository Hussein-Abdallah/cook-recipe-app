import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import type { Recipe, RootStackParamList } from "../types";
import {
  RecipeCard,
  TabContent,
  TabNavItems,
  Ingredients,
  Directions,
  Nutrition,
} from "../components";
import { useState } from "react";

interface Props {
  route?: RouteProp<RootStackParamList, "Recipe">;
}

const tabs = [
  { id: 1, title: "Ingredients" },
  { id: 2, title: "Directions" },
  { id: 3, title: "Nutrition" },
] as const;

export function RecipeScreen({ route }: Props) {
  const [activeTab, setActiveTab] = useState(1);
  const recipe = route?.params.recipe!;
  const {
    ingredients,
    directions,
    nutrition,
    preparation_time,
    cooking_time,
    difficulty,
  } = recipe;

  if (!recipe) {
    return null;
  }

  return (
    <ScrollView showsHorizontalScrollIndicator style={styles.Container}>
      <RecipeCard image={recipe.image} title={recipe.title} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%" }}
      >
        <FlatList
          numColumns={3}
          data={tabs}
          renderItem={({ item, index }) => (
            <TabNavItems
              index={index}
              id={item.id}
              title={item.title}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          extraData={tabs}
        />
      </ScrollView>
      <View style={styles.TabContent}>
        <TabContent id={tabs[0].id} activeTab={activeTab}>
          <Ingredients ingredients={ingredients} />
        </TabContent>
        <TabContent id={tabs[1].id} activeTab={activeTab}>
          <Directions
            directions={directions}
            prepTime={preparation_time}
            cookTime={cooking_time}
            difficulty={difficulty}
          />
        </TabContent>
        <TabContent id={tabs[2].id} activeTab={activeTab}>
          <Nutrition nutrition={nutrition} />
        </TabContent>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    flex: 1,
    marginBottom: 20,
  },
  TabContent: {
    flex: 1,
  },
});
