import { createStackNavigator } from "@react-navigation/stack";
import { CategoryScreen, IndexScreen } from "../screens";
import { RecipeScreen } from "../screens";
import { colors } from "../config";
import { Header } from "../components";

import type { RootStackParamList } from "../types";

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
        headerTitle: () => <Header />,
      }}
    >
      <Stack.Screen name="Recipes" component={IndexScreen} />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={({ route }) => ({
          headerTitle: () => {
            const routeParams = route.params as RootStackParamList["Recipe"];
            return <Header title={routeParams.recipe.title} />;
          },
        })}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route }) => ({
          headerTitle: () => {
            const routeParams = route.params as RootStackParamList["Category"];
            return <Header title={routeParams.name} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}
