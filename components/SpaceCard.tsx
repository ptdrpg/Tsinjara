import { View, Text, TouchableOpacity } from 'react-native'
// import { Href, useRouter } from 'expo-router';

type props = {
  title: string;
  link: string;
}

const SpaceCard = ({ title }: props) => {
  // const navigate = useRouter();
  
  const handleNavigate = () => {
    // navigate.push(link as Href);
  }

  return (
    <TouchableOpacity className='h-max flex-row items-center justify-between w-full'>
      <View className='h-max flex-row items-center justify-start gap-[10]'>
        <View className='px-[13] py-[5] bg-amber-600 flex-row items-center justify-center text-black rounded-sm'>
          <Text className='text-xl font-bold'>
            {
              title.split("")[0].toUpperCase()
            }
          </Text>
        </View>
        <View className='flex-1 flex-col items-start justify-center'>
          <Text className='font-bold text-sm'>{ title }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SpaceCard