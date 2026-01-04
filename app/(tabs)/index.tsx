import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.text}>hari</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "#ffffff",
  },
});
