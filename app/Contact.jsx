import React from "react";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Contact = () => {
    const Navigation = useNavigation();
    return (
        <>
            <Text>
                Contact Screen
            </Text>
            <Button onPress={
                () => {
                    Navigation.navigate("Home")
                }
            }>
                Navigate to Home
            </Button>
        </>
    );
}
export default Contact;