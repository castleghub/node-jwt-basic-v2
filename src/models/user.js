import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {

    class User extends Model {}

//By default, Sequelize automatically adds the fields createdAt and updatedAt to every model.

    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      }, {
        sequelize, // We need to pass the connection instance
        timestamps: true,
        createdAt: 'created', // Solo esta columna es usada
        updatedAt: false,
        schema: 'dev',
        tableName: 'tbl_users'
      });
      return User;

}