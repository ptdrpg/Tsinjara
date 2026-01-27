import { useState } from 'react';
import { View, Text, Pressable, Modal, FlatList } from 'react-native'
import { modalSpaceItems } from '@/static/creation';
import { useDeleteChannel } from '@/service/query/chanel';

type props = {
  title: string;
  id: string;
  sheetAction: (id: string)=> void;
}

const SpaceCard = ({ title, sheetAction, id }: props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {mutate: deleteSpace} = useDeleteChannel() 

  const handlePress = ()=> {
    sheetAction(id)
  }

  const handleDeleteSpace = ()=> {
    deleteSpace(id)
    setModalVisible(false)
  }

  return (
    <Pressable 
    className='h-max flex-row items-center justify-between w-full p-[10] rounded-[10] bg-emerald-200' 
    onPress={handlePress}
    onLongPress={()=> setModalVisible(true)}
    delayLongPress={100}
    >
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
     <Modal transparent visible={modalVisible} animationType="fade">
        <Pressable
          className="flex-1 bg-black/40 "
          onPress={() => setModalVisible(false)}
        />

        <View className='w-full h-[400] absolute top-0 left-0 right-0 p-[20] gap-[10]'>
            <View className='w-full h-[400] bg-slate-300 rounded-xl'>

            </View>
        <View className="bg-none rounded-xl p-2 shadow-lg w-[250] bg-slate-300">
          <FlatList
            data={modalSpaceItems}
            className='w-max'
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                className={`flex-row items-center p-3 rounded-lg w-max ${item.id == '1' ? "border-b border-b-slate-500": ""}`}
                onPress={()=> {
                  item.label == "delete"? handleDeleteSpace(): setModalVisible(false)
                }}
              >
                {<item.icon size={16} color={item.label == "delete"? "#ef4444": "#ffff"} />}
                <Text
                  className={`ml-3 text-base ${item.label == "delete"? "text-red-600": ""}`}
                >
                  {item.label}
                </Text>
              </Pressable>
            )}
          />
        </View>
        </View>
      </Modal>
    </Pressable>
  )
}

export default SpaceCard