import { Image, ImageBackground, View, StyleSheet } from "react-native";

import { AppText, AppButton } from "../components";
import { styles as defaultStyles } from "../config/styles";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../navigation/storage";
export function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.BackgroundImage}
    >
      <View style={styles.BackDropContainer} />
      <Image style={styles.Logo} source={require("../assets/logo.png")} />
      <View style={styles.WelcomeContainer}>
        <AppText style={styles.Text}>Cook Like A Chef</AppText>
        <AppText style={styles.SubText}>
          Delicious Recipes at Your Fingertips
        </AppText>
        <AppButton
          title="Get Started"
          onPress={() => {
            setItem("isFirstTime", "false");
            onFinish();
          }}
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
    ...StyleSheet.absoluteFillObject,
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
    fontWeight: "900",
    marginVertical: 16,
  },
  SubText: {
    fontSize: 30,
    color: defaultStyles.colors.white,
    marginVertical: 16,
    fontWeight: "600",
  },
});
