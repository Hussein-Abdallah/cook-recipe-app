import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { AppText } from "./AppText";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface Props {
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export function CategoryCard({ category }: Props) {
  const { id, name, image } = category;
  const navigation: StackNavigationProp<RootStackParamList, "Category"> =
    useNavigation();
  const handlePress = (id: number) => {
    navigation.navigate("Category", { id, name });
  };

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        handlePress(id);
      }}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.Image}
        source={{
          uri: `${image}`,
        }}
      >
        <View style={styles.BackdropOverlay} />
        <AppText style={styles.text}>{name}</AppText>
      </ImageBackground>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: "100%",
  },
  Image: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  BackdropOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
