import { View, Text } from 'react-native'
import React from 'react'
import { LucideProps } from 'lucide-react-native';

type props = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const Tracker = ({ icon: Icon }:props) => {
  return (
    <View className='items-center justify-center gap-[5]'>
      <View className='p-2 items-center justify-center rounded-[7] bg-amber-700'>
        <Icon size={20} />
      </View>
      <Text>10%</Text>
    </View>
  )
}

export default Tracker