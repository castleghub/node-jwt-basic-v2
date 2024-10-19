import db from '../models/index.js'



export const getUsers = async (req, res) => {

    try {

    const {rows} = db.users.findAll({
        attributes: ['name', 'email'],
    })

     
    } catch (error) {

    }
      

}