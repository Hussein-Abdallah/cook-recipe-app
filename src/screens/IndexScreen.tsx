import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";

import { recipes } from "../data/recipes.json";
import { RootStackParamList } from "../types";
import {
  Categories,
  RecipesList,
  TabContent,
  TabNavItems,
} from "../components";
import { fetchLatestRecipes } from "../utilities/fetchData";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Recipes">;
};

type TabItem = {
  id: number;
  title: string;
};

const items: TabItem[] = [
  { id: 1, title: "Recent" },
  { id: 2, title: "Explore" },
];

export function IndexScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState(1);

  const recentRecipes = fetchLatestRecipes(recipes, 5);
  return (
    <View style={[styles.container]}>
      <View>
        <FlatList
          numColumns={2}
          data={items}
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
          extraData={items}
        />
      </View>
      <View style={styles.TabContent}>
        <TabContent id={items[0].id} activeTab={activeTab}>
          <RecipesList recipes={recentRecipes} navigation={navigation} />
        </TabContent>
        <TabContent id={items[1].id} activeTab={activeTab}>
          <Categories />
        </TabContent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TabContent: {
    flex: 1,
  },
});
