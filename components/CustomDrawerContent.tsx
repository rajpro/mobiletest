import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";


export default function CustomDrawerContent(props: any) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
            >
                <View style={{
                    marginBottom:35
                }}>
                    <Image 
                    source={{uri: "https://galaxies.dev/img/authors/simong.webp"}}
                    style={{width:100, height:100, alignSelf:'center', borderRadius:50}}
                    />
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 14,
                        color: '#69b4f5',
                        margin: 5
                    }}>Rajesh Sardar</Text>
                </View>
                <DrawerItemList {...props} />
                <View
                    style={{
                        borderBottomColor: '#e0e0e0',
                        borderBottomWidth: 1,
                        marginTop: 50,
                        marginBottom: 10
                    }}
                />
                <DrawerItem label={'Logout'}
                    onPress={() => {
                        return;
                    }}
                    icon={({ size, color }) => (<Ionicons name="power-outline" size={size} color={color} />)}
                />
            </DrawerContentScrollView>
        </View>
    )
}
