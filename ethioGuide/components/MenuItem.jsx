import React, { useContext } from "react";
import { View, Text, Image, Button } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MenuItem({ item }) {
  const { toggleFavorite, favorites } = useContext(FavoritesContext);

  const isFavorite = favorites.some((f) => f.title === item.title);

  return (
    <View className="flex-row items-center bg-white px-4 py-3 rounded-xl mb-2 mx-4">
      
      <Image source={item.icon} className="w-10 h-10 mr-3" />

      <Text className="flex-1">{item.name}</Text>

      <Button
        title={isFavorite ? "💔 Remove" : "❤️ Like"}
        onPress={() => toggleFavorite(item)}
      />
    </View>
  );
}