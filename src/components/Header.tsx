import { StyleSheet } from "react-native";
import { colors } from "../config";
import { AppText } from "./AppText";

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  return (
    <AppText
      style={[
        styles.Header,
        { fontSize: title ? 18 : 26, fontWeight: title ? "normal" : "bold" },
      ]}
    >
      {title ?? "Cook Recipe App"}
    </AppText>
  );
}

const styles = StyleSheet.create({
  Header: {
    color: colors.primary,
  },
});
