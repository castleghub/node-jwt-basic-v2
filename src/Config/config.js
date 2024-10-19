import {config} from 'dotenv'

config()


export const PORT = process.env.PORT || 3000
export const PGHOST = process.env.PGHOST
export const PGDATABASE = process.env.PGDATABASE
export const PGUSER = process.env.PGUSER
export const PGPASSWORD = process.env.PGPASSWORD
export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION
