import { eq } from "drizzle-orm";
import db from "../initDb"
import { UserTable } from "../model/schema"
import { InsertResType, UserType } from "../model/type"

export const getUser = async () => {
  const res: UserType[] = await db.select().from(UserTable);
  if (res.length == 0 ) {
    return null;
  }
  return res[0];
}

export const newUser = async (data: UserType): Promise<InsertResType> => {
  try {
    await db.insert(UserTable).values(data);
    return  {
      status: 200,
      message: "User created successfully"
    }
  } catch (error) {
    throw {
      status: 500,
      message: String(error)
    }
  }
}

export const updateUser = async (data: UserType): Promise<InsertResType> => {
  try {
    await db.update(UserTable).set(data).where(eq(UserTable.id, data.id));
    return  {
      status: 202,
      message: "User updated successfully"
    }
  } catch (error) {
    throw {
      status: 500,
      message: String(error)
    }
  }
}
