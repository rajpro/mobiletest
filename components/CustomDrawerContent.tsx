import useUserHook from "@/hooks/useUserHook";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";


export default function CustomDrawerContent(props: any) {
    const {logout} = useUserHook();
    const router = useRouter();
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
                
                <DrawerItem label={'Dashboard'}
                    onPress={() => {
                        return router.push("/(stacks)");
                    }}
                    icon={({ size, color }) => (<Ionicons name="home-outline" size={size} color={color} />)}
                />
                <DrawerItem label={'Doctors'}
                    onPress={() => {
                        return router.push("/(doctor)");
                    }}
                    icon={({ size, color }) => (<Ionicons name="medkit-outline" size={size} color={color} />)}
                />
                <DrawerItem label={'Logout'}
                    onPress={() => {
                        return logout();
                    }}
                    icon={({ size, color }) => (<Ionicons name="power-outline" size={size} color={color} />)}
                />
            </DrawerContentScrollView>
        </View>
    )
}
