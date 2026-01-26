import { View } from 'react-native'
import React from 'react'
import { creation_data } from '@/static/creation'
import CreationSheetList from './CreationSheetList'

type props = {
  setModal: ()=> void;
  setCreatmodal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreationModal = ({setModal, setCreatmodal}: props) => {

  return (
    <View className='w-full h-max items-center justify-center gap-3 px-[20]'>
      {
        creation_data.map((item, index) => (
          <CreationSheetList key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} link={item.link} closeModal={setModal} setCreatmodal={setCreatmodal} />
        ))
      }
    </View>
  )
}

export default CreationModal