// import React from "react";

// import { View, Text, Image, StyleSheet, FlatList } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import person_1 from "./assets/person_1.jpg";
// import person_2 from "./assets/person_2.webp";
// import person_3 from "./assets/person_3.jpg";
// import person_7 from "./assets/person_7.jpg";
// import person_9 from "./assets/person_9.jpg";
// import person_6 from "./assets/person_6.webp";
// import person_8 from "./assets/person_8.jpg";

// const App = () => {

//   const myData = [
//     {
//       id: "1",
//       ContactImg: person_1,
//       contactName: "Lokesh",
//       LastMsg: "Rey paguludhi...",
//     },
//     {
//       id: "2",
//       ContactImg: person_7,
//       contactName: "Sri Junior",
//       LastMsg: "Hi",
//     },
//     {
//       id: "3",
//       ContactImg: person_2,
//       contactName: "Maneesh",
//       LastMsg: "Have u done!",
//     },
//     {
//       id: "4",
//       ContactImg: person_3,
//       contactName: "Ashrith",
//       LastMsg: "Hello",
//     },
//     {
//       id: "5",
//       ContactImg: person_9,
//       contactName: "Karthik Teki",
//       LastMsg: "what the Update?.."
//     },
//     {
//       id: "6",
//       ContactImg: person_6,
//       contactName: "Sri Ram",
//       LastMsg: "rey project chesava..."
//     },
//     {
//       id: "7",
//       ContactImg: person_8,
//       contactName: "Chelli",
//       LastMsg: "Dinner chesava.."
//     }
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={item.ContactImg} style={styles.avatar} />
//       <View>
//         <Text style={styles.name}>{item.contactName}</Text>
//         <Text style={styles.msg}>{item.LastMsg}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FlatList
//         data={myData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         horizontal={false}
//       />
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     padding: 12,
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderColor: "#ddd"
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   msg: {
//     color: "gray"
//   }
// });
import React from "react";
import Component from "./Component.js";
import Workofchip from "./Workofchip.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
    <>
      <SafeAreaProvider>
        {/* <Component /> */}
        <Workofchip />
      </SafeAreaProvider>
    </>
  );
}
export default App;