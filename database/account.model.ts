import { model, models, Schema, Types } from "mongoose";

interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, rquired: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, rquired: true },
    providerAccountId: { type: String, rquired: true },
  },
  { timestamps: true }
);

const account = models?.Account || model<IAccount>("Account", AccountSchema);

export default account;
