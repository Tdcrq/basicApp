import {StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {Link} from "expo-router";

export default function Index() {
  return (
      <SafeAreaView>
          <ThemedText variant={"headline"}>Home</ThemedText>
          <ThemedText variant={"subtitle1"}>this is the home page</ThemedText>
          <Link href={"/about"} style={styles.links}>
              <ThemedText variant={"body2"}>About page</ThemedText>
          </Link>
          <Link href={{pathname: '/fiche/[id]', params: {id: 1}}} style={styles.links}>
              <ThemedText variant={"body2"}>Fiche 01</ThemedText>
          </Link>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    links: {backgroundColor: "#7037FF"}
})