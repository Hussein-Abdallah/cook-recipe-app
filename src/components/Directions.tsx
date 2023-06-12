import { View, StyleSheet, Text, FlatList } from "react-native";
import { AppText } from "./AppText";
import { colors } from "../config";

interface Props {
  directions: string;
  prepTime: number;
  cookTime: number;
  difficulty: string;
}

export function Directions({
  directions,
  prepTime,
  cookTime,
  difficulty,
}: Props) {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.Item}>
          <AppText style={styles.Heading}>{prepTime}min</AppText>
          <AppText style={styles.SubHeading}>Prep. Time</AppText>
        </View>
        <View style={styles.Item}>
          <AppText style={styles.Heading}>{cookTime}min</AppText>
          <AppText style={styles.SubHeading}>Cook Time</AppText>
        </View>
        <View style={[styles.Item, { borderRightWidth: 0 }]}>
          <AppText style={styles.Heading}>{difficulty}</AppText>
          <AppText style={styles.SubHeading}>Difficulty</AppText>
        </View>
      </View>
      <AppText style={styles.Text}>{directions}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  Item: {
    alignItems: "center",
    flex: 1,
    borderRightWidth: 1.5,
    borderRightColor: colors.light,
  },
  Heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
  },
  SubHeading: {
    fontSize: 14,
    color: colors.medium,
  },
  Text: {
    lineHeight: 25,
    fontSize: 16,
    color: colors.dark,
  },
});
