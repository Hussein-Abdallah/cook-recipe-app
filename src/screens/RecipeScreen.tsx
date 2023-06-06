import { StyleSheet, ScrollView } from "react-native";
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
      <AppText>{`${route?.params.recipe.title}`}</AppText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
