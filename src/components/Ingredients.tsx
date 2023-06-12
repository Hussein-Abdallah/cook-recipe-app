import { View, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { colors } from "../config";

interface Props {
  ingredients: string[];
}
export function Ingredients({ ingredients }: Props) {
  return (
    <View style={styles.container}>
      {ingredients.map((ingredient: string, index: number) => (
        <AppText key={index} style={styles.Text}>
          {`\u2010 ${ingredient}`}
        </AppText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  Text: {
    lineHeight: 35,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
  },
});
