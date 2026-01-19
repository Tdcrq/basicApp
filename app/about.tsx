import {Text, View} from "react-native";
import {Link} from "expo-router";
import {HeaderTitle} from "@react-navigation/elements";

export default function About() {
    return (
        <View>
            <Text>PAGE ABOUT</Text>
            <View>
                <Link href="/">
                    <HeaderTitle>Index</HeaderTitle>
                </Link>
            </View>
        </View>
    )
}