import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  route: any;
}

export function RecipeScreen({ route }: Props) {
  const navigation = useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator>
      <Text>RecipeScreen</Text>
      <Text>{route.params.recipe.title}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
