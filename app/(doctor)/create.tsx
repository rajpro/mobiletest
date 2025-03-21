import { TextInput, StyleSheet, ScrollView, Button, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';


export default function CreateScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Doctor" });
  }, [navigation]);

  return (
    <SafeAreaProvider style={{backgroundColor:"#FFFFFF"}}>
      <SafeAreaView>
        <ScrollView style={{
          padding: 20,
        }}>
          <Text style={styles.h3}>
            Create Doctor
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Doctor Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Speciality"
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
          />

          <View style={{flexDirection: "row"}}>
            <TextInput
              style={styles.input_time}
              placeholder="Address"
            />
            <View style={{width:18}}></View>
            <TextInput
              style={styles.input_time}
              placeholder="Address"
              keyboardType="numeric"
            />
          </View>

          <Button
            title="Create"
            onPress={() => { }}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  h3: {
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    height: 40,
    marginBottom: 25,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  input_time: {
    flex: 1,
    height: 40,
    marginBottom: 25,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 12
  }
});