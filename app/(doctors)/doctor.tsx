import DoctorCard from '@/components/dashboard/DoctorCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DoctorcreateScreen from './doctorcreate';

export default function DoctorScreen() {
  const navigation = useNavigation();
  
  var doctorCards = [];
  for (let index = 0; index < 15; index++) {
    doctorCards.push(<DoctorCard key={index}/>);
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
        right:20,
        bottom: 20
      }} onPress={() => {<DoctorcreateScreen/>}} >
        <Ionicons name='add-circle' size={80} color={"black"}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    marginTop: 15
  },
});