import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Plus } from 'lucide-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreationModal from '@/components/CeationModal';
import { Button } from '@/components/ui/button';
import { Text } from 'react-native';
import BalanceCrard from '@/components/BalanceCrard';
import SpaceCardList from '@/components/SpaceCardList';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGetUser } from '@/service/query/user';
import { useRouter } from 'expo-router';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import NewSpace from './new_channel';

const index = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: user, isLoading } = useGetUser();
  const router = useRouter();
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoint = useMemo(()=> ["22%"],[]);

  const handleSnapPress = useCallback(() => {
    sheetRef.current?.present();
  },[]);

  const handleClosePres = useCallback(()=> {
    sheetRef.current?.dismiss();
  },[])

  useEffect(()=> {
    if (isLoading) return;
    if (!user) {
      router.push("/register");
    }
  },[isLoading, user])

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='font-bold text-2xl'>Loading DB...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView className='w-full px-5 py-[10] flex-1'>
      <View className='flex-1 gap-[20]'>
        <View className='w-full flex-row items-center h-max justify-between'>
          <Button className='bg-emerald-900'>
            <Text className='font-bold text-white'>{ user?.username.split("")[0].toUpperCase() }</Text>
          </Button>
          <View>
            <Text>Tsinjara</Text>
          </View>
          <Button className='bg-emerald-900' onPress={handleSnapPress} >
            <Plus size={12} />
          </Button>
          <BottomSheetModal
            ref={sheetRef}
            index={0}
            snapPoints={snapPoint}
            enableDynamicSizing={false}
            $modal={true}
            backdropComponent={(backdropProps: BottomSheetBackdropProps)=> (
              <BottomSheetBackdrop 
                {...backdropProps}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                opacity={0.5}
                pressBehavior="close"
              />
            )}
          >
            <BottomSheetScrollView >
              {
                <CreationModal setModal={handleClosePres} setCreatmodal={setOpen} />
              }
            </BottomSheetScrollView>
          </BottomSheetModal>
        </View>
        <BalanceCrard />
        <SpaceCardList />
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <NewSpace closeModal={setOpen} />
        </DialogContent>
      </Dialog>
      </View>
    </SafeAreaView>
  )
}

export default index