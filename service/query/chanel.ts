import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteChannel, getAllChannel, newChanel } from "../repository/chanel"
import { QUERY_KEY } from "../constant"
import { ChanelType } from "../model/type"
import { toast } from "sonner-native"

export const useGetAllChannel = () => {
  return useQuery({
    queryKey: QUERY_KEY.channel.all,
    queryFn: () => getAllChannel(),
  }) 
}

export const useCreateChannel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ChanelType) => newChanel(data),
    onSuccess: () => {
      toast.success("Space successfuly created");
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.channel.all });
    },
    onError: (error) => {
      toast.error(String(error)? String(error): "Something went wrong");
    }
  })
}

export const useDeleteChannel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteChannel(id),
    onSuccess: () => {
      toast.success("Space successfuly deleted");
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.channel.all });
    },
    onError: (error) => {
      toast.error(String(error)? String(error): "Something went wrong");
    }
  })
}
