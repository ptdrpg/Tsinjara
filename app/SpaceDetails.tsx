import { View, Text } from 'react-native'
import React from 'react'

type props = {
  spaceId: string;
}

const SpaceDetails = ({ spaceId }: props) => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>SpaceDetails</Text>
      <Text>{ spaceId }</Text>
    </View>
  )
}

export default SpaceDetails