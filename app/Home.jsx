import React from "react";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
    const Navigation = useNavigation()
    return (
        <>
            <Text>
                Home Screen
            </Text>
            <Button
                onPress={() => {
                    Navigation.navigate("Contact");
                }}
            >
                Go to Contact Page
            </Button>
        </>
    );
}
export default Home;