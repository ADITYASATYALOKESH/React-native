import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Contact from "./Contact";
const DrawerNavigation = createDrawerNavigator();
const Drawer_Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <DrawerNavigation.Navigator>
                    <DrawerNavigation.screen name="Home" component={Home} />
                    <DrawerNavigation.screen name="Contact" component={Contact} />
                </DrawerNavigation.Navigator>
            </NavigationContainer>
        </>
    )
}
export default Drawer_Navigation;