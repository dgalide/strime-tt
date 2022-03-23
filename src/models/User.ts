import { Model, DataTypes, Sequelize } from 'sequelize';

export class User extends Model {}

export const createUserModel = (client: Sequelize) => {
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
  }, { sequelize: client, modelName: 'user' });
}
