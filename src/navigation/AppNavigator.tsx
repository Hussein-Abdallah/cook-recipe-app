import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CategoriesScreen } from "../screens";
import { RecipesNavigator } from "./RecipesNavigator";

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen name="Home" component={RecipesNavigator} />
      <Tab.Screen name="Explore" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}
