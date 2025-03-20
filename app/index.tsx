import Card from "@/components/dashboard/card";
import DoctorCard from "@/components/dashboard/DoctorCard";
import { Link } from "expo-router";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  var doctorCards = [];
  for (let index = 0; index < 15; index++) {
    doctorCards.push(<DoctorCard key={index}/>); 
  }
  return (
    <View
      style={styles.container}
    >
      <View style={{
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 20,
        marginLeft: 15
      }}>
        <Card name="Doctors" count="534" />
        <Card name="Users" count="234" />
      </View>

      <Text style={{
        marginHorizontal: 15,
        marginBottom: 20,
        fontSize:25
      }}>Doctors List</Text>

      <ScrollView>
        {doctorCards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});