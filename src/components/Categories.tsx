import { View, StyleSheet, FlatList } from "react-native";
import { categories } from "../data/categories.json";
import { CategoryCard } from "./CategoryCard";

export function Categories() {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.id.toString()}
        extraData={categories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
