import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react-native';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'expo-router';
import { useForm , Controller} from 'react-hook-form';
import { ChanelType } from '@/service/model/type';
import { useCreateChannel } from '@/service/query/chanel';
import { useGetUser } from '@/service/query/user';

type props = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewSpace = ({ closeModal }: props) => {
  const { control, handleSubmit, watch } = useForm<ChanelType>();
  const { data: user } = useGetUser();
  const { mutate: newSpace } = useCreateChannel();
  const navigate = useRouter();

  const paraph = watch("label");

  const submit = (data: ChanelType) => {
    if (user) {
      data.owner_id = user.id;
      newSpace(data);
      closeModal(false)
    }
  }

  return (
    <SafeAreaView className='w-full px-5 py-[10] h-max'>
      <View className='h-max justify-between  gap-[20]'>
        <View className='h-max w-full gap-[20]'>
          <View className="w-full justify-center gap-[20]">
            <View className='w-full items-center justify-center'>
              <View className='px-[25] py-[15] bg-amber-600 rounded-[10]'>
                <Text className='font-bold text-3xl' >{ paraph ? paraph.split("")[0].toUpperCase() : "D" }</Text>
              </View>
            </View>
            <View className="gap-2">
              <Label htmlFor="name">Space name</Label>
              <Controller
                control={control}
                name="label"
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      placeholder="Untitled..."
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize="none"
                      returnKeyType="done"
                    />
                  </>
                )}
              />
            </View>
          </View>
        </View>
        <Button className='bg-emerald-900 w-full ' onPress={handleSubmit(submit)}>
          <Text>Create</Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default NewSpace