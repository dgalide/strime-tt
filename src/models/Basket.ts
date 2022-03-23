import { DataTypes, Model, Sequelize } from "sequelize";

export class Basket extends Model {}

export const createBasketModel = (client: Sequelize) => {
  Basket.init({
    products: DataTypes.ARRAY(DataTypes.UUID)
  }, { sequelize: client, modelName: 'basket' });
}