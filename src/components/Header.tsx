import { View, StyleSheet, Text } from "react-native";
import { colors } from "../config";

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  return <Text style={styles.Header}>{title ? title : "Cook Recipe App"}</Text>;
}

const styles = StyleSheet.create({
  Header: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
  },
});
