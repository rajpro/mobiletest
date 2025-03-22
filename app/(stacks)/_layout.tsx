import React from "react";
import { Stack, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { View } from "react-native";

const StacksLayout = () => {
  const nav = useNavigation();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Dashboard",
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <View style={{
                flexDirection: "row"
              }}>
                <Ionicons
                name="search"
                size={24}
                style={{marginRight:10}}
                onPress={() => {
                  
                }}/>
                <Ionicons
                name="time"
                size={24}
                onPress={() => {
                  
                }}
              />
              </View>
              
            );
          },
          headerLeft: () => {
            return (
              <Ionicons
                name="menu"
                size={24}
                style={{marginRight:10}}
                onPress={() => {
                  nav.dispatch(DrawerActions.openDrawer());
                }}
              />
            );
          },
        }}
      />
    </Stack>
  );
};

export default StacksLayout;