import { DataTypes, Model } from "sequelize";
import { sequelizeClient } from "../index";

export class Order extends Model {}

Order.init({
  products: DataTypes.ARRAY(DataTypes.UUID),
  timestamp: DataTypes.DATE
}, { sequelize: sequelizeClient, modelName: 'order' });