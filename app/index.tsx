import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {Card} from "@/components/Card";
import {Link} from "expo-router";
import {useThemeColors} from "@/hooks/useThemeColors";

export default function Index() {
    const colors = useThemeColors()
  return (
      <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
          <ThemedText variant={"headline"} color={"white"}>Home</ThemedText>
          <ThemedText variant={"subtitle1"} color={"white"}>this is the home page</ThemedText>

          <Card>
              <ThemedText variant={"body2"} color={"dark"}>TEST BODY2</ThemedText>
          </Card>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1}
})