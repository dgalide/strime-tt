import { Model, DataTypes } from 'sequelize';
import { sequelizeClient } from '../index'

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  token: DataTypes.STRING,
}, { sequelize: sequelizeClient, modelName: 'user' });
