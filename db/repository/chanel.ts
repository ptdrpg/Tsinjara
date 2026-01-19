import { eq } from "drizzle-orm"
import db from "../initDb"
import { ChanelTable } from "../model/schema"
import { ChanelType, InsertResType } from "../model/type";
import uuid from 'react-native-uuid';

export const getAllChannel = async (id: string): Promise<ChanelType[]> => {
  try {
    const res: ChanelType[] = await db.select().from(ChanelTable).where(eq(ChanelTable.owner_id, id));
    return res;
  } catch (error) {
    throw error;
  }
}

export const newChanel = async (data: ChanelType): Promise<ChanelType> => {
  try {
    const id = uuid.v4();
    data.id = id;
    const res: ChanelType[] = await db.insert(ChanelTable).values(data).returning();
    return res[0];
  } catch (error) {
    throw error;
  }
}

export const deleteChannel = async (id: string): Promise<InsertResType> => {
  try {
    await db.delete(ChanelTable).where(eq(ChanelTable.id, id));
    return {
      status: 202,
      message: "Channel deleted successfully"
    }
  } catch (error) {
    throw {
      status: 500,
      message: String(error)
    }
  }
}
