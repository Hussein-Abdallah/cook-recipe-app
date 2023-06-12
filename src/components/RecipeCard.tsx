import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../config";
import { AppText } from "./AppText";

interface RecipeCardProps {
  title: string;
  image: string;
  onPress?: () => void;
}
export function RecipeCard({ title, image, onPress }: RecipeCardProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.Image}
          source={{
            uri: `https://res.cloudinary.com/dv6n26bjx/image/upload/h_350/v1685994008/Cook-App${image}`,
          }}
        />
        <View style={styles.ImageBackDrop}></View>
        <View style={styles.TextContainer}>
          <AppText style={styles.Title}>{title}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "100%",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  ImageBackDrop: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(0,0,0,0.15)",
  },
  TextContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  Title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "left",
  },
});
