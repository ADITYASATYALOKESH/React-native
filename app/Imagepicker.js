import React, { useState } from "react";
import { View, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Imagepicker = () => {
    const insets = useSafeAreaInsets();
    const [image, setImage] = useState();

    const getImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            alert("Permission to access gallery is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
            <View style={{ paddingTop: insets.top }}>
                <Text variant="headlineMedium">Image Picker</Text>
            </View>

            <Button mode="outlined" onPress={getImage}>
                Add Images
            </Button>

            <View>
                {image
                    ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    : <Text>No Image Selected</Text>}
            </View>

            <Button mode="outlined">
                Share Images
            </Button>
        </>
    );
};

export default Imagepicker;