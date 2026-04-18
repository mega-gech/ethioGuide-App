import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function TabLayout() {
  return (
      <Tabs
          screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'rgb(33, 27, 27)',
              tabBarInactiveTintColor: "#CDCDE0",
              tabBarShowLabel: false,
              tabBarStyle: {
                  backgroundColor: "#fff",
                  borderTopWidth: 1,
                  borderTopColor: '#F0F0F0',
                  height: 56,
                  paddingTop: 8
              }
      }}
      >
          <Tabs.Screen name="index" options={{
              tabBarIcon: ({ color, focused }) => <Ionicons name={
                  focused? 'home' : 'home-outline'}  size={26} color={color}/>
          }} />

          <Tabs.Screen name="explore" options={{
              tabBarIcon: ({ focused, color }) => <Feather
                  name={focused ? 'search' : 'search'}
                  size={26} 
                  color={color} />
          }} />

          <Tabs.Screen name="chat" options={{
              tabBarIcon: ({ focused, color }) => <Ionicons
                  name={focused ? 'chatbubble' : 'chatbubble-outline'}
                  size={26} 
                  color={color} />
          }} />

          <Tabs.Screen name="profile" options={{
              tabBarIcon: ({ focused, color }) => <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={26} 
                  color={color} />
          }} />
    </Tabs>
  );
}