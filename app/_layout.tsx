import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent} >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Dashboard',
            title: 'Dashboard',
            drawerIcon: ({size, color}) => (<Ionicons name="home-outline" size={size} color={color}/>)
          }}
        />
        <Drawer.Screen
          name="doctors/doctor" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Doctors',
            title: 'Doctors',
            drawerIcon: ({size, color}) => (<Ionicons name="medkit-outline" size={size} color={color}/>)
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}