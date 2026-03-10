import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication";
const SecurityFeatures = () => {
    const Open = async () => {
        const status = await LocalAuthentication.hasHardwareAsync();
        console.log("hardware", status);
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        console.log("Enrolled", isEnrolled);
        const result = await LocalAuthentication.authenticateAsync();
        console.log(result);
    }
    return (
        <>
            <View style={{ marginTop: 100 }}>
                <Button onPress={Open}>
                    Click me
                </Button>
            </View>
        </>
    );
}
export default SecurityFeatures;