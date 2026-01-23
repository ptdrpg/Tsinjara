import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../repository/user";
import { QUERY_KEY } from "../constant";
import { newUserController } from "../controller/user";
import { UserType } from "../model/type";
import { toast } from 'sonner-native';

export const useGetUser = ()=>{
  return useQuery({
    queryKey: QUERY_KEY.user,
    queryFn: () => getUser(),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  })
}

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: UserType)=> newUserController(data),
    onSuccess: ()=>{
      toast.success("User created successfully");
    },
  })
}
