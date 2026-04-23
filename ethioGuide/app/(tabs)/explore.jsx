import React, { useState } from "react";
import { SafeAreaView, SectionList , View,Text} from "react-native";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import MenuItem from "@/components/MenuItem";
import CategoryImages from "@/assets/images/categories";



export default function Explore() {
  const PROFILE_MENU = [
    {
      title: "History of the Ethiopian Empire",
      data: [
        { name: "Early Period", icon: CategoryImages.fasil },
        { name: "Medieval Period", icon: CategoryImages.history },
        { name: "Modern Period", icon: CategoryImages.history }
      ]
    },
    {
      title: "Religions of Ethiopia",
      data: [
        { name: "Orthodox Christianity", icon: CategoryImages.history },
        { name: "Islam", icon: CategoryImages.history }
      ]
    },
    {
      title: "Festivals and Holy Days",
      data: [
        { name: "Timket", icon: CategoryImages.dressing },
        { name: "Meskel", icon: CategoryImages.dressing }
      ]
    },
    {
      title: "Traditional Clothing",
      data: [
        { name: "Habesha Kemis", icon: CategoryImages.culture }
      ]
    },
    {
      title: "Music & Dance",
      data: [
        { name: "Eskista", icon: CategoryImages.music }
      ]
    },
    {
      title: "Cuisine and Culinary Traditions",
      data: [
        { name: "Eskista", icon: CategoryImages.music }
      ]
    },
    {
      title: "mountains and landscapes",
      data: [
        { name: "Eskista", icon: CategoryImages.music }
      ]
    },
    {
      title: "femous people",
      data: [
        { name: "Eskista", icon: CategoryImages.music }
      ]
    },
    {
      title: "natural wonders",
      data: [
        { name: "Eskista", icon: CategoryImages.music }
      ]
    }
  ];

  //  correct state (use title as key)
 const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (title) => {
  setActiveSection((prev) =>
    prev === title ? null : title
  );
};
  

  return (
    <SafeAreaView style={{flex: 1}} className="flex-1 bg-light">
      <Header title="Explore" showBack={true} />

      
         <View className="px-4 py-4">
            <Text className="text-lg font-semibold text-gray-800">
              Dive into Ethiopia's rich history, culture, and traditions.
            </Text>
          </View>
     
      <SectionList
        className="flex-1"
        sections={PROFILE_MENU}

        keyExtractor={(item, index) => item.name + index}
         
       
        renderSectionHeader={({ section }) => (
          <SectionHeader
            title={section.title}
            isOpen={activeSection === section.title}
            onPress={() => toggleSection(section.title)}
          />
        )}

        renderItem={({ item, section }) => {
          if (!activeSection || activeSection !== section.title)
            return null;
     
          return <MenuItem item={item} />
          ;
        }}

        showsVerticalScrollIndicator={false}
       
        contentContainerStyle={{
          paddingBottom: 100,
          minHeight: "100%"
}}
      />
      
    </SafeAreaView>
  );
}