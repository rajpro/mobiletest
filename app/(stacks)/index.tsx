import { getDoctors } from "@/apis/doctor";
import Card from "@/components/dashboard/card";
import DoctorCard from "@/components/dashboard/DoctorCard";
import useDoctorHook from "@/hooks/useDoctorHook";
import { DoctorModel } from "@/models/doctorModel";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

export default function Index() {
  const {doctors, loading, fetchDoctors} = useDoctorHook();

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
        fontSize: 25
      }}>Doctors List</Text>

      <ScrollView>

        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor}/> // ✅ Pass each doctor as a prop
          ))
        ) : (
          <Text style={{textAlign: "center",
            fontSize: 18,
            color: "#888"}}>No doctors available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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