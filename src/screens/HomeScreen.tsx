import { StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { Header } from "../components";

interface Props {
  navigation: any;
}
export function HomeScreen({ navigation }: Props) {
  return (
    <Screen style={styles.container}>
      <Header />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
