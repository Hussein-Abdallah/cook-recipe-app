import { Image, ImageBackground, View, StyleSheet } from "react-native";

import { Text } from "../components/Text";
import { styles as defaultStyles } from "../config/styles";
import { Button } from "../components/Button";

export function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.BackgroundImage}
    >
      <View style={styles.BackDropContainer} />
      <Image style={styles.Logo} source={require("../assets/logo.png")} />
      <View style={styles.WelcomeContainer}>
        <Text style={styles.Text}>Cook Like A Chef</Text>
        <Text style={styles.SubText}>Delicious Recipes at Your Fingertips</Text>
        <Button
          title="Get Started"
          onPress={() => console.log("Get Started")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  BackDropContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  Logo: {
    position: "absolute",
    top: "25%",
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  WelcomeContainer: {
    margin: 8,
    marginBottom: 25,
  },
  Text: {
    color: defaultStyles.colors.white,
    fontSize: 60,
    fontWeight: 900,
    marginBottom: 16,
  },
  SubText: {
    fontSize: 30,
    color: defaultStyles.colors.white,
    marginBottom: 16,
    fontWeight: "600",
  },
});
