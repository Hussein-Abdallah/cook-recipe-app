import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../config";

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
