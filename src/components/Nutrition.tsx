import { View, StyleSheet } from "react-native";
import { Recipe } from "../types";
import { AppText } from "./AppText";
import { Divider } from "./Divider";
import { NutritionContainer } from "./NutritionContainer";

interface Props {
  nutrition: Recipe["nutrition"];
}

export function Nutrition({ nutrition }: Props) {
  return (
    <View style={styles.Container}>
      <AppText style={styles.Heading}>Nutrition Facts</AppText>
      <Divider />
      <NutritionContainer
        title="Serving Size"
        value={nutrition.serving_size}
        height={10}
        textStyle="medium"
        noUnit
      />
      <AppText style={{ fontWeight: "bold" }}>Amount Per Serving</AppText>
      <NutritionContainer
        title="Calories"
        value={nutrition.calories}
        height={5}
        textStyle="large"
        noUnit
      />
      <NutritionContainer
        title="Total Fat"
        value={nutrition.fat.total}
        header
      />
      <NutritionContainer
        title="Saturated Fat"
        value={nutrition.fat.saturated_fat}
        unit="gram"
        subSection
      />
      <NutritionContainer
        title="Trans Fat"
        value={nutrition.fat.trans_fat}
        unit="gram"
        subSection
      />
      <NutritionContainer
        title="Polyunsaturated Fat"
        value={nutrition.fat.polyunsaturated_fat}
        unit="gram"
        subSection
      />

      <NutritionContainer
        title="Monounsaturated Fat"
        value={nutrition.fat.monounsaturated_fat}
        subSection
        unit="gram"
      />
      <NutritionContainer
        title="Cholesterol"
        value={nutrition.cholesterol}
        header
      />
      <NutritionContainer title="Sodium" value={nutrition.sodium} header />
      <NutritionContainer
        title="Total Carbohydrate"
        value={nutrition.carbohydrates.total}
        header
      />
      <NutritionContainer
        title="Dietary Fiber"
        value={nutrition.carbohydrates.dietary_fiber}
        subSection
        unit="gram"
      />
      <NutritionContainer
        title="Sugars"
        value={nutrition.carbohydrates.sugars}
        unit="gram"
        subSection
      />
      <NutritionContainer
        title="Protein"
        value={nutrition.protein}
        unit="gram"
        header
        height={10}
      />
      <NutritionContainer
        title="Vitamin D"
        value={nutrition.vitamins.vitamin_d}
      />
      <NutritionContainer title="Calcium" value={nutrition.vitamins.calcium} />
      <NutritionContainer title="Iron" value={nutrition.vitamins.iron} />
      <NutritionContainer
        title="Potassium"
        value={nutrition.vitamins.potassium}
      />

      <NutritionContainer
        title="Vitamin A"
        value={nutrition.vitamins.vitamin_a}
      />
      <NutritionContainer
        title="Vitamin C"
        value={nutrition.vitamins.vitamin_c}
        height={5}
      />
      <AppText style={styles.Remark}>
        * The % Daily Value (DV) tells you how much a nutrient in a serving of
        food contributes to a daily diet. 2,000 calories a day is used for
        general nutrition advice.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    borderWidth: 1,
  },
  Heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
  Remark: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
