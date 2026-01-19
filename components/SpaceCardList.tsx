import { Text, View } from 'react-native'
import React from 'react'
import { Search } from 'lucide-react-native'

const SpaceCardList = () => {
  return (
    <View className='w-full items-start justify-center gap-[10]'>
      <View className='w-full flex-row p-[10] rounded-[10] gap-[10] border border-gray-400'>
        <Search size={16} />
        <Text className='text-gray-500' >find space</Text>
      </View>
      <Text>All space</Text>
    </View>
  )
}

export default SpaceCardList
