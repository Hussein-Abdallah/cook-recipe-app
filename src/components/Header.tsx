import { View, StyleSheet, Text } from "react-native";
import { colors } from "../config";

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  return (
    <Text
      style={[
        styles.Header,
        { fontSize: title ? 18 : 26, fontWeight: title ? "normal" : "bold" },
      ]}
    >
      {title ?? "Cook Recipe App"}
    </Text>
  );
}

const styles = StyleSheet.create({
  Header: {
    color: colors.primary,
  },
});
