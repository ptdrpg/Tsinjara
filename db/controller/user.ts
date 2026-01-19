import { InsertResType, UserType } from "../model/type";
import { newUser } from "../repository/user";
import uuid from 'react-native-uuid';

export const newUserController = async (data: UserType): Promise<InsertResType> => {
  try {
    const id = uuid.v4();
    data.id = id;
    const res: InsertResType = await newUser(data);
    return res;
  } catch (error) {
    return {
      status: 500,
      message: String(error),
    }
  }
}
