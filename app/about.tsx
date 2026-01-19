import {Text, View} from "react-native";
import {Link} from "expo-router";
import {HeaderTitle} from "@react-navigation/elements";
import {SafeAreaView} from "react-native-safe-area-context";

export default function About() {
    return (
        <SafeAreaView>
            <Text>PAGE ABOUT</Text>
            <View>
                <Link href={{pathname: "/"}}>
                    <HeaderTitle>Index</HeaderTitle>
                </Link>
            </View>
        </SafeAreaView>
    )
}