import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CategoriesScreen } from "../screens";
import { Header } from "../components";
import { RecipesNavigator } from "./RecipesNavigator";

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={RecipesNavigator} />
      <Tab.Screen name="Explore" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}
