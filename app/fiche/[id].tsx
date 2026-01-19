import {StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Fiche() {
    const params = useLocalSearchParams()
    return <SafeAreaView style={styles.container}>
        <Text style={styles.main}>Fiche {params.id}</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {backgroundColor: "#FFF000"},
    main: {backgroundColor: "#99adf8"}
})
