import { DataTypes, Model } from "sequelize";
import { sequelizeClient } from "../index";

export class Product extends Model {}

Product.init({
  name: DataTypes.STRING
}, { sequelize: sequelizeClient, modelName: 'product' });