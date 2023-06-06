import { StyleSheet, TouchableOpacity } from "react-native";
import type { Dispatch, SetStateAction } from "react";
import { colors } from "../../config";
import { AppText } from "../AppText";

interface Props {
  index: number;
  id: number;
  title: string;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export function TabNavItems({
  index,
  id,
  title,
  activeTab,
  setActiveTab,
}: Props) {
  const clickHandler = () => {
    setActiveTab(id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.TabNavItem,
        index % 2 !== 0 && {
          borderLeftWidth: 1.5,
          borderLeftColor: colors.white,
        },
        activeTab === id && {
          borderBottomColor: colors.secondary,
          borderBottomWidth: 4,
        },
        { backgroundColor: colors.light },
      ]}
      onPress={clickHandler}
    >
      <AppText
        style={[styles.title, activeTab === id && { color: colors.secondary }]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TabNavItem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
