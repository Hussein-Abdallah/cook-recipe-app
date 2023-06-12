import { Text } from "react-native";
import type { TextProps } from "react-native";
import { styles } from "../config/styles";

interface Props extends TextProps {
  children: TextProps["children"];
}
export function AppText({
  children,
  style,
  ...otherProps
}: Props): JSX.Element {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
