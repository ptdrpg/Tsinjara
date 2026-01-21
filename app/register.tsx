import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm, Controller } from "react-hook-form";
import { UserType } from '@/db/model/type';
import { useSignup } from '@/db/query/user';
import { useRouter } from 'expo-router';

const Register = () => {
  const { control, handleSubmit } = useForm<UserType>();
  const router = useRouter();
  const { mutate: signup } = useSignup();

  const onSubmit = (data: UserType) => {
    signup(data);
    router.push("/");
  }

  return (
    <SafeAreaProvider className='flex-1 w-full'>
      <View className='w-full flex-1 items-center justify-center px-[30] py-[30] gap-[50]'>
        <View className='w-full flex-col items-center justify-center'>
          <Text className='text-xl'>Welcome to</Text>
          <Text className="text-5xl">Tsinjara</Text>
        </View>
        <View className="w-full justify-center gap-4">
          <View className="gap-2">
            <Label htmlFor="username">Username</Label>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder="Username"
                    value={value}
                    onChangeText={onChange}
                    autoCapitalize="none"
                    returnKeyType="next"
                  />
                </>
              )}
            />
          </View>
          <View className="gap-2">
            <Label htmlFor="email">Email</Label>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder="Email"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                  />
                </>
              )}
            />
          </View>
          <View className="gap-2">
            <Label htmlFor="password">Password</Label>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    textContentType="password"
                    keyboardType="default"
                    autoCapitalize="none"
                    returnKeyType="done"
                  />
                </>
              )}
            />
          </View>
          <Button 
            className='bg-emerald-800'
            onPress={handleSubmit(onSubmit)} 
          ><Text>Register</Text></Button>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

export default Register