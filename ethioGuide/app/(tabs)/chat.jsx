import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'

export default function chat() {
  return (
    <View>
    <Header title='ai chat' showBack={true}/>
      <Text>chat</Text>
    </View>
  )
}