import { createStackNavigator } from "@react-navigation/stack";

import { RecipesListScreen } from "../screens";
import { RecipeScreen } from "../screens";
import { colors } from "../config";
import { Header } from "../components";
import type { RouteProp } from "@react-navigation/native";

const Stack = createStackNavigator();

export function RecipesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.dark,
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name="Recipes"
        component={RecipesListScreen}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
}
