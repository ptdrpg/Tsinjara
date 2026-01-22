import { View } from 'react-native'
import React from 'react'
import { creation_data } from '@/static/creation'
import CreationSheetList from './CreationSheetList'

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreationModal = ({setModal}: props) => {
  return (
    <View className='w-full h-max items-center justify-center gap-3'>
      {
        creation_data.map((item, index) => (
          <CreationSheetList key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} link={item.link} setModal={setModal} />
        ))
      }
    </View>
  )
}

export default CreationModal