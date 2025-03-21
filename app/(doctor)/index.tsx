import DoctorCard from '@/components/dashboard/DoctorCard';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";

export default function DoctorScreen() {
  const router = useRouter();

  var doctorCards = [];
  for (let index = 0; index < 15; index++) {
    doctorCards.push(<DoctorCard key={index} />);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {doctorCards}
      </ScrollView>
      <TouchableOpacity style={{
        position: "absolute",
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        right: 20,
        bottom: 20
      }} onPress={() => { router.push("/(doctor)/create") }} >
        <Ionicons name='add-circle' size={80} color={"black"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFFFFF',
  },
});