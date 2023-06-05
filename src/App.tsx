import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScreen } from "./screens";
import { AppNavigator } from "./navigation";
import { navigationTheme } from "./navigation";
import { useEffect, useState } from "react";
import { getItem } from "./navigation/storage";

export default function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  useEffect(() => {
    checkIfFirstTime();
  }, []);

  const checkIfFirstTime = async () => {
    try {
      const isFirstTime = await getItem("isFirstTime");
      if (isFirstTime === null || JSON.parse(isFirstTime)) {
        setShowWelcomeScreen(true);
        return;
      }
    } catch (error) {
      console.log("Error @checkIfFirstTime: ", error);
    }
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <View style={styles.container}>
        <StatusBar style={showWelcomeScreen ? "light" : "dark"} />
        {showWelcomeScreen ? (
          <WelcomeScreen onFinish={() => setShowWelcomeScreen(false)} />
        ) : (
          <AppNavigator />
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
