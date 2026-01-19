import { View } from 'react-native'
import React from 'react'
import { creation_data } from '@/static/creation'
import CreationSheetList from './CreationSheetList'

const CreationModal = () => {
  return (
    <View className='w-full h-36 items-center justify-center gap-3'>
      {
        creation_data.map((item, index) => (
          <CreationSheetList key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ))
      }
    </View>
  )
}

export default CreationModal