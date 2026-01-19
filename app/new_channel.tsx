import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react-native';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'expo-router';


const new_channel = () => {
  const navigate = useRouter();
  const handleNavigate = () => {
    navigate.push("/");
  }

  return (
    <SafeAreaView className='w-full px-5 py-[10] flex-1'>
      <View className='flex-1 justify-between  gap-[20]'>
        <View className='flex-1 w-full gap-[20]'>
         <View className='w-full flex-row items-center h-max justify-between'>
          <Button className='bg-emerald-900' onPress={handleNavigate}>
            <ChevronLeft size={12} />
          </Button>
          <View>
            <Text>Tsinjara</Text>
          </View>
          <View></View>
          </View>
          <View className="w-full justify-center">
            <View className="gap-2">
              <Label htmlFor="name">Space name</Label>
              <Input id="name" placeholder="Untitled..." />
            </View>
          </View>
        </View>
        <Button className='bg-emerald-900 w-full '>
          <Text>Create</Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default new_channel