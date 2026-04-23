import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { FavoritesContext } from "@/context/FavoritesContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '@/components/Header'
import MenuItem from "@/components/MenuItem";


export default function Profile() {
  const { favorites } = useContext(FavoritesContext);

  return (
     <SafeAreaView>
          <Header title="Favorites" showBack={true} />

           <FlatList
            data={favorites}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
            <MenuItem item={item} />
      )}
    />
        </SafeAreaView>
  )
}