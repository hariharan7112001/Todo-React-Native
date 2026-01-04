import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { Text, View } from "react-native";

const Test = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
