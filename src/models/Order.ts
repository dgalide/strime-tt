import { DataTypes, Model, Sequelize } from "sequelize";

export class Order extends Model {}

export const createOrderModel = (client: Sequelize) => {
  Order.init({
    products: DataTypes.ARRAY(DataTypes.UUID),
    timestamp: DataTypes.DATE
  }, { sequelize: client, modelName: 'order' });
}