import React from "react";
import { View, Text, Button, TouchableOpacity, Alert, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyImage from "./assets/favicon.png";
import Logo from "./assets/au_2.png";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity >

          <Text style={styles.heading}>
            <Image source={Logo} style={styles.logo} />
            Aditya University
          </Text>
        </TouchableOpacity>
        <Text style={styles.about}>
          Aditya University, located in Surampalem, Kakinada, Andhra Pradesh, is a NAAC A++ accredited State Private University established under the Andhra Pradesh Private Universities Act, 2016, evolving from the esteemed Aditya Engineering College. It offers diverse programs in engineering, technology, management, and pharmacy with a focus on research, innovation, and industry-aligned training, boasting significant placement records.
        </Text>
        <TouchableOpacity
          onPress={() => alert("Pressed")}
          style={{
            backgroundColor: "green",
            padding: 12,
            borderRadius: 6
          }}
        >
          <Text style={{ color: "white", backgroundColor: "Black", textAlign: "center" }}>
            Custom Button
          </Text>
        </TouchableOpacity>
        <Image source={MyImage} />
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    backgroundColor: "blue",
    width: "100%",
    height: 70,
    textAlign: "center",
    color: "white",
    lineHeight: 70,
  },
  logo: {
    width: 80,
    height: 70,
    padding: 5,
  },
  about: {
    width: "100%",
    padding: 15,
    // margin: 10,
  }
})
