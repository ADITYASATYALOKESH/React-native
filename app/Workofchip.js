import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, FlatList, StatusBar } from "react-native";
import { TextInput, Button, Chip } from "react-native-paper";

const Workofchip = () => {
    const insets = useSafeAreaInsets();

    const [skills, setSkills] = useState([]);
    const [count, setCount] = useState(0);
    const [skillText, setSkillText] = useState("");

    const Populate = () => {
        if (!skillText.trim()) return;

        setSkills(prev => [
            ...prev,
            { id: count.toString(), sk: skillText }
        ]);

        setCount(prev => prev + 1);
        setSkillText("");
    };

    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={{ paddingTop: insets.top, padding: 16 }}>
                <Text style={{ marginBottom: 8 }}>Select Skills</Text>

                <TextInput
                    label="Skill"
                    placeholder="Enter Skill"
                    value={skillText}
                    onChangeText={setSkillText}
                    disabled={skills.length >= 5}
                />

                <Button
                    style={{ marginVertical: 10 }}
                    mode="contained-tonal"
                    icon="plus"
                    onPress={Populate}
                >
                    Add Skill
                </Button>

                <FlatList
                    data={skills}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Chip
                            style={{ margin: 4 }}
                            icon="check"
                            closeIcon="close"
                            onClose={() =>
                                setSkills(prev => prev.filter(skill => skill.id !== item.id))
                            }
                        >
                            {item.sk}
                        </Chip>

                    )}
                />
            </View>
        </>
    );
};

export default Workofchip;
