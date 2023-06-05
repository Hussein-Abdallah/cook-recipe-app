import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";

interface Props {
  children: JSX.Element;
  style?: ViewStyle;
}
export function Screen({ children, style }: Props) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
});
