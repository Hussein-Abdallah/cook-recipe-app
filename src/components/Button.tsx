import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../config";
import { Text } from "./Text";

interface Props {
  title: string;
  onPress: () => void;
  color?: "primary" | "secondary" | "danger";
}

export function Button({ title, onPress, color = "primary" }: Props) {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.Text}>{title}</Text>
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
