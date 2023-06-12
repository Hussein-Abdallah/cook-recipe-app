import { View, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { Divider } from "./Divider";

export const NutritionContainer = ({
  title,
  value,
  unit,
  height,
  header,
  subSection,
  textStyle,
  noUnit,
}: {
  title: string;
  value: string | number;
  unit?: "gram" | "percent";
  height?: number;
  header?: boolean;
  subSection?: boolean;
  textStyle?: "large" | "medium";
  noUnit?: boolean;
}) => (
  <>
    <View
      style={[styles.NutritionContainer, subSection && { paddingLeft: 20 }]}
    >
      <AppText
        style={[
          header && styles.BoldText,
          textStyle === "large" && styles.Subheading1,
          textStyle === "medium" && styles.Subheading2,
        ]}
      >
        {title}
      </AppText>
      <AppText
        style={[
          header && styles.BoldText,
          textStyle === "large" && styles.Subheading1,
          textStyle === "medium" && styles.Subheading2,
        ]}
      >
        {value}
        {!noUnit ? (unit === "gram" ? "g" : "%") : null}
      </AppText>
    </View>
    <Divider height={height} />
  </>
);

const styles = StyleSheet.create({
  NutritionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Subheading1: {
    fontSize: 26,
    fontWeight: "bold",
  },
  Subheading2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  BoldText: {
    fontWeight: "bold",
  },
});
