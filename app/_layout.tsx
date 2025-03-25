import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function StacksLayout() {
  const router = useRouter();

  useEffect(() => {
    const token = AsyncStorage.getItem('token');
    console.log(token);
    if(token !== null || token !== undefined){
      router.push('/(stacks)');
    }
  },[]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }} drawerContent={CustomDrawerContent}></Drawer>
    </GestureHandlerRootView>
  );
}