import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '@/components/Header'

export default function DetailsPage() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Header title="Details" showBack={true} />
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">
        Temporary Details Page
      </Text>

      <Text className="mt-2 text-gray-600">
        Item ID: {id}
      </Text>
    </View>
    </SafeAreaView>
  );
}