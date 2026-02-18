import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    Button,
    TextInput,
} from "react-native";
const Component = () => {
    const results = useSafeAreaInsets();
    return (
        <>
            <View style={{ paddingTop: results.top }}>
                <TextInput
                    placeholder="Enter Your Name"
                    defaultValue="Allen"
                />
                <Button
                    title="Submit"
                    onPress={() => alert("Successfully Submitted!!")}
                />
            </View>
        </>
    );
}
export default Component;