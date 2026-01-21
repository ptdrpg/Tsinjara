import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreationModal from '@/components/CeationModal';
import { Button } from '@/components/ui/button';
import { Text } from 'react-native';
import BalanceCrard from '@/components/BalanceCrard';
import SpaceCardList from '@/components/SpaceCardList';
import { useEffect, useState } from 'react';
import { useGetUser } from '@/db/query/user';
import { useRouter } from 'expo-router';

const index = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: user, isLoading } = useGetUser();
  const router = useRouter();

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
          <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
              <Button className='bg-emerald-900' onPress={()=> setOpen(true)} >
                <Plus size={12} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <CreationModal setModal={setOpen} />
            </DialogContent>
          </Dialog>
        </View>
        <BalanceCrard />
        <SpaceCardList />
      </View>
    </SafeAreaView>
  )
}

export default index