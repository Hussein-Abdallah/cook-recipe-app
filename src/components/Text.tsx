import { Text as RnText } from "react-native";
import { styles } from "../config/styles";

interface Props {
  children: string;
  style?: object;
}
export function Text({ children, style, ...otherProps }: Props) {
  return (
    <RnText style={[styles.text, style]} {...otherProps}>
      {children}
    </RnText>
  );
}
