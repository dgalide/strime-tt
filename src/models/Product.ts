import { DataTypes, Model, Sequelize } from "sequelize";

export class Product extends Model {}

export const createProductModel = (client: Sequelize) => {
  Product.init({
    name: DataTypes.STRING
  }, { sequelize: client, modelName: 'product' });
}