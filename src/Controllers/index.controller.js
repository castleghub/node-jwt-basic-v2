import db from "../models/index.js";


export const ping = async (req, res, next) => {

  try {
    await db.sequelize.authenticate();

    res.status(200).json({message: "Server Alive"} )
    console.log('Connection has been established successfully.');

  } catch (error) {
    res.status(500).json({message: error})
    console.error('Unable to connect to the database:', error);
  }

};
