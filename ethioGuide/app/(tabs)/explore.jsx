import React, { useState } from "react";
import { SafeAreaView, SectionList , View,Text} from "react-native";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import MenuItem from "@/components/MenuItem";
import CategoryImages from "@/assets/images/categories";
import {PROFILE_MENU} from "@/assets/images/categories/asset";



export default function Explore() {
  

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