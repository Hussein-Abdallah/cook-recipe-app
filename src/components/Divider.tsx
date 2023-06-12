import { View, StyleSheet } from "react-native";

interface Props {
  height?: number;
}
export function Divider({ height }: Props) {
  return <View style={[styles.container, { height: height || 1 }]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginVertical: 5,
  },
});
