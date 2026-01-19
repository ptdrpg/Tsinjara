
export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type InsertResType = {
  status: number;
  message: string;
}

export type ChanelType = {
  id: string;
  label: string;
  owner_id: string;
  created_at: Date;
  updated_at: Date;
}
