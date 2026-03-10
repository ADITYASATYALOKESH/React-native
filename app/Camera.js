import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Sharing from 'expo-sharing'
const Camera = () => {
    const insets = useSafeAreaInsets();
    const [Frames, setFrame] = useState(null)
    const [ImagePath, setImagePath] = useState(null)
    const [permission, RequestCamAccess] = useCameraPermissions();
    if (!permission) {
        return (
            <Text>Loading</Text>
        )
    }
    if (!permission.granted) {
        return (
            <Button onPress={RequestCamAccess}>RequestCamAccess</Button>
        )
    }
    const Capture = async () => {
        if (Frames) {
            const Picture = await Frames.takePictureAsync()
            // console.log(Picture)
            setImagePath(Picture.uri)
        }
    }
    const Share = async () => {
        const Permission = await Sharing.isAvailableAsync()
        if (Permission) {
            await Sharing.shareAsync(ImagePath)
        }
    }
    return (
        <>
            <View style={{ paddingTop: insets.top }}></View>
            <View>

                <View>
                    <CameraView
                        style={{ width: "100%", height: 300 }}
                        facing="back"
                        ref={(ref) => setFrame(ref)}
                    />
                    <Button onPress={Capture}>Take Picture</Button>
                    {
                        ImagePath
                            ? <Image source={{ uri: ImagePath }} style={{ width: 200, height: 200 }} />
                            : <Text>NO Captured Image</Text>
                    }
                    <Button onPress={Share}>Share</Button>
                </View>
            </View>
        </>
    );
}
export default Camera;
