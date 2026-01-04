// import { ThemeProvider } from "@react-navigation/native";
import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="about" options={{ title: "about" }} /> */}
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
