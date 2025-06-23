import Header from "@/layout/Header";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* меняет цвет в статусбаре */}
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
