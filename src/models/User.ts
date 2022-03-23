import { Model, DataTypes } from 'sequelize';
import { sequelizeClient } from '../index'

export class User extends Model {}

User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  token: DataTypes.STRING,
}, { sequelize: sequelizeClient, modelName: 'user' });
