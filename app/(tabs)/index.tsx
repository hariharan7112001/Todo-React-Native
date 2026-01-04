// import { useTheme } from "@/hooks/useTheme";
import Test from "@/components/Test";
import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Test />
      <Text style={styles.text}>hari</Text>
      <TouchableOpacity style={styles.button} onPress={toggleDarkMode}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // gap: 10,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "lightblue",
  },
});
