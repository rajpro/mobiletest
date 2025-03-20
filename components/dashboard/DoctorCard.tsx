import { Text, View, Image } from "react-native";



export default function DoctorCard() {
  return (
    <View style={{
      marginHorizontal: 15,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      flexDirection: 'row'
    }}>
      <View style={{ flexWrap: "wrap", marginRight: 20 }}>
        <Image
          source={{ uri: "https://galaxies.dev/img/authors/simong.webp" }}
          style={{ width: 80, height: 80, alignSelf: 'center' }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 600
        }}>Rajesh Sardar</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: 200,
          textTransform: "capitalize"
        }}>medicine specialist</Text>

        <Text style={{
          marginTop: 10,
          fontSize: 15,
          fontWeight: 400,
          textTransform: "capitalize",
        }}>Plot No.1 Besides Satyasai Enclave Khandagiri, Bhubaneswar 751 030</Text>

        <Text style={{
          marginVertical:5,
          fontSize: 14,
          fontWeight: 300,
          textTransform: "capitalize"
        }}>Time: 8AM - 9PM</Text>

        <View style={{ marginTop: 25, flexDirection: 'row' }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 100,
            marginRight: 15
          }}>Phone</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 100
          }}>Email</Text>
        </View>
      </View>
    </View>
  )
}
