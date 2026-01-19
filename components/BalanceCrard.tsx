import { View, Text } from 'react-native'
import React from 'react'
import { Tracker_data } from '@/static/creation'
import Tracker from './Tracker'

const BalanceCrard = () => {
  return (
    <View className='w-full flex-row items-center justify-between p-5 rounded-[10] bg-gray-200'>
      <View>
        <Text>Balance (Ar)</Text>
        <Text className='font-bold text-3xl'>200k</Text>
      </View>
      <View className='flex-row items-center justify-center gap-3'>
        {
          Tracker_data.map((items, idx) => (
            <Tracker icon={items.icon} key={idx} />
          ))
        }
      </View>
    </View>
  )
}

export default BalanceCrard