import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScreen } from "./screens";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" />
        <WelcomeScreen />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
