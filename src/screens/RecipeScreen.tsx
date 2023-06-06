import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { AppText } from "../components";
interface Props {
  route?: RouteProp<RootStackParamList, "Recipe">;
}

export function RecipeScreen({ route }: Props) {
  const navigation = useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator>
      <AppText>RecipeScreen</AppText>
      <Text>{route?.params.recipe.title}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
