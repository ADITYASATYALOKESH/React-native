import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Icon } from "react-native-paper";
import Home from "./Home";
import Contact from "./Contact";
const TopTab = createMaterialTopTabNavigator();
const Topbar_Navigation = () => {
    const insets = useSafeAreaInsets();
    return (
        <>
            <NavigationContainer>
                <TopTab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color }) => {
                            let IconName;
                            if (route.name == 'Home') {
                                IconName = focused ? 'home' : 'home-outline'
                            }
                            if (route.name == "Contact") {
                                IconName = focused ? 'cog' : "cog-outline"
                            }
                            return <Icon source={IconName} size={28} color={color} />
                        },
                        tabBarStyle: {
                            paddingTop: insets.top
                        },
                        tabBarActiveTintColor: "red",
                        tabBarInactiveTintColor: "black",
                        tabBarIndicatorStyle: {
                            backgroundColor: "red"
                        },
                        tabBarItemStyle: {
                            flexDirection: "row"
                        }
                    })}
                >
                    <TopTab.Screen name="Home" component={Home} />
                    <TopTab.Screen name="Contact" component={Contact} />
                </TopTab.Navigator>
            </NavigationContainer>
        </>
    );
}
export default Topbar_Navigation;