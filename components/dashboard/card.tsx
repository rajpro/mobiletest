import { Text, View } from "react-native";

type CardProps = {
    name: string;
    count: string;
  };

export default function card(props: CardProps) {
  return (
    <View style={{
        marginRight:15,
        padding: 10,
        borderRadius:5,
        backgroundColor: 'rgb(255, 255, 255)',
        elevation: 3,
        flex:1
    }}>
        <Text style={{
            fontSize: 20
        }}>{props.name}</Text>
        <Text style={{
            fontSize:25,
            marginVertical: 10,
            textAlign: "center"
        }}>{props.count}</Text>
    </View>
  )
}
