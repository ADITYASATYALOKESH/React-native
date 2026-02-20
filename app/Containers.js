import React, { useState } from "react";
import { View, StatusBar, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Dialog, Card } from "react-native-paper";

const Container = () => {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(false);

    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={{ paddingTop: insets.top, padding: 16 }}>
            </View>
            <Button
                mode="contained"
                onPress={() => setVisible(true)}
            >
                Submit
            </Button>
            {/* <Dialog
                visible={visible}
                onDismiss={() => setVisible(false)}
            >
                <Dialog.Icon icon={"alert"} />
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text>Let's Delete the Instance</Text>
                </Dialog.Content>

                <Dialog.Actions>
                    <Button
                        onPress={() => setVisible(false)}
                        mode="contained"
                    >
                        Cancel
                    </Button>
                </Dialog.Actions>
            </Dialog> */}
            <Card
                mode="outlined">
                <Card.Content>
                    <Text>
                        Hi Hello this is Aditya
                    </Text>
                </Card.Content>
                <Card.Actions>
                    <Button>
                        Close
                    </Button>
                </Card.Actions>
            </Card>
        </>
    );
};

export default Container;