import {StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function Fiche() {
    const params = useLocalSearchParams()
    return <View style={styles.container}>
        <Text>Fiche {params.id}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {backgroundColor: "#FFF000"},
    main: {backgroundColor: "#99adf8"}
})
