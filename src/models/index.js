import {Dbcon as dbConfig} from '../Config/db.config.js'
import Sequelize, { DataTypes } from 'sequelize';

// Connecting to a database

const db = {};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, 
    dbConfig.PASSWORD, 
    {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    // logging: console.log, 

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
    
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  //db.users = require('./user')(sequelize,DataTypes);
  import user from "./user.js";
  db.users = user(sequelize,DataTypes);

   
  //Evitar alteracion de tablas desde sequelize
  await db.sequelize.sync({ force: false, alter: false });

  export default db;