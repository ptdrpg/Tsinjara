import { Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Search } from 'lucide-react-native'
import { useGetAllChannel } from '@/service/query/chanel'
import SpaceCard from './SpaceCard'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import SpaceDetails from '@/app/SpaceDetails'

const SpaceCardList = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoint = useMemo(()=> ["96%"],[]);
  const [spaceId, setSpaceId] = useState<string>("");

  const handleSnapPress = useCallback((id: string) => {
      sheetRef.current?.present();
      setSpaceId(id);
    },[]);

  const { data: spaces } = useGetAllChannel();
  return (
    <View className='w-full items-start justify-center gap-[10]'>
      <View className='w-full flex-row p-[10] rounded-[10] gap-[10] border border-gray-400'>
        <Search size={16} />
        <Text className='text-gray-500' >find space</Text>
      </View>
      <Text>All space</Text>
      <View className='w-full flex items-start justify-start gap-[10]'>
        {
          spaces?.map((items, idx) => (
            <SpaceCard title={items.label} id={items.id} sheetAction={handleSnapPress} key={idx} />
          ))
        }
      </View>
      <BottomSheetModal
            ref={sheetRef}
            index={0}
            snapPoints={snapPoint}
            enableDynamicSizing={false}
            $modal={true}
          >
            <BottomSheetScrollView >
              <SpaceDetails spaceId={spaceId} />
            </BottomSheetScrollView>
          </BottomSheetModal>
    </View>
  )
}

export default SpaceCardList
