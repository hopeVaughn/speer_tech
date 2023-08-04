import { Sequelize, DataTypes, Model } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();
const databaseUrl = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL_DEV;
// console.log(process.env.DATABASE_URL_DEV);
// console.log(process.env.DATABASE_URL_TEST);

const sequelize = new Sequelize(databaseUrl as string, { dialect: 'postgres' });


class Call extends Model {}

Call.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  created_at: { type: DataTypes.DATE },
  direction: { type: DataTypes.STRING },
  from: { type: DataTypes.STRING },
  to: { type: DataTypes.STRING },
  via: { type: DataTypes.STRING },
  duration: { type: DataTypes.INTEGER },
  is_archived: { type: DataTypes.BOOLEAN },
  call_type: { type: DataTypes.STRING },
}, {
  sequelize,
  modelName: "call",
});

export { Call, sequelize };
