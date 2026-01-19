import { HardDrive } from 'lucide-react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { type LucideProps } from 'lucide-react-native'
import { Href, useRouter } from 'expo-router';

type props = {
  title: string;
  subtitle: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  link: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  
}

const CreationSheetList = ({ title, subtitle, icon: Icon, link, setModal }: props) => {
  const navigate = useRouter();

  const handleNavigate = () => {
    setModal(false);
    navigate.push(link as Href);
  }

  return (
    <TouchableOpacity className='h-9' onPress={handleNavigate}>
      <View className='w-full flex-1 flex-row items-center justify-start gap-[10]'>
        <View className='p-[10] bg-amber-600 text-black rounded-sm'>
          <Icon size={16} color="black" />
        </View>
        <View className='flex-1 flex-col items-start justify-start'>
          <Text className='font-bold'>{ title }</Text>
          <Text className='text-[12px] text-gray-500'>{ subtitle }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CreationSheetList