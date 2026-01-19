import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Link href="/about">A propos</Link>
        <Link href={{pathname: '/fiche/[id]', params: {id: 1}}}>Fiche 1</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#99adf8', flex: 1, padding: 24, gap: 5}
})