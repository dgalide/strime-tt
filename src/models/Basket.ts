import { DataTypes, Model } from "sequelize";
import { sequelizeClient } from "..";

export class Basket extends Model {}

Basket.init({
  products: DataTypes.ARRAY(DataTypes.UUID)
}, { sequelize: sequelizeClient, modelName: 'basket' });