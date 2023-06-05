import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../config";

interface RecipeCardProps {
  title: string;
  image: string;
  onPress: () => void;
}
export function RecipeCard({ title, image, onPress }: RecipeCardProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.Image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.ImageBackDrop}></View>
        <View style={styles.TextContainer}>
          <Text style={styles.Title}>{title}</Text>
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
