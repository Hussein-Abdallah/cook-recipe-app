import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { WelcomeScreen } from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
