import DoctorCard from '@/components/dashboard/DoctorCard';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from "expo-router";
import { useEffect } from 'react';
import useDoctorHook from '@/hooks/useDoctorHook';

export default function DoctorScreen() {
  const { doctors, loading, fetchDoctors } = useDoctorHook();
  const router = useRouter();

  useEffect(() => {
    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : (
          <Text style={{
            textAlign: "center",
            fontSize: 18,
            color: "#888"
          }}>No doctors available</Text>
        )}
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