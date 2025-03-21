import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }} drawerContent={CustomDrawerContent} >
        <Drawer.Screen
          name="(stacks)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Dashboard',
            title: 'Dashboard',
            drawerIcon: ({size, color}) => (<Ionicons name="home-outline" size={size} color={color}/>)
          }}
        />
        <Drawer.Screen
          name="(doctor)" // This is the name of the page and must match the url from root
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