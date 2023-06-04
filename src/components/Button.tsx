import { TouchableOpacity, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { colors } from "../config";
import { AppText } from "./AppText";

interface Props {
  title: string;
  onPress: () => void;
  color?: "primary" | "secondary" | "danger";
  style?: ViewStyle;
}

export function Button({
  title,
  onPress,
  color = "primary",
  style,
}: Props): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <AppText style={styles.Text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  Text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
