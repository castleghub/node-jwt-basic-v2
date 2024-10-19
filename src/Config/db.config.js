import {PGHOST, PGDATABASE, PGUSER, PGPASSWORD} from './config.js'

export const Dbcon = {
    HOST: PGHOST,
    USER: PGUSER,
    PASSWORD: PGPASSWORD,
    DB: PGDATABASE,
    dialect: "postgres",
    dialectOptions: {
      ssl: false,
  },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }

}