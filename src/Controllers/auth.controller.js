import db from '../models/index.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {JWT_SECRET, JWT_REFRESH_EXPIRATION} from '../Config/config.js'

//npm i @types/bcryptjs -D
//npm i @types/jsonwebtoken -D

export const registerUser = async (req,res) => {

try {
    const {name,email,password} = req.body;
    // Check if the email exists
     const userExists = await db.users.findOne({
        where: {email}
     });

     if (userExists) {
          return res.status(400).json({
            message: "Email is already associated with an account",
          });
     }

     // Create a new user
     await db.users.create({
        name,
        email,
        password: await bcrypt.hash(password,15), //123
     });

     return res.status(200).json({
        message: "Registration successful",
     });

} catch (error) {
    
}
}

export const signInUser = async(req, res)=> {

try {
   
   const {email, password} = req.body;
   const user = await db.users.findOne({
      where: {email}
   });

   if(!user) {
      return res.status(404).json({
         message: "Email not found"
      });
   }

   // Verify password
   const passwordValid = await bcrypt.compare(password, user.password);
    
   if(!passwordValid) {
      return res.status(404).json({
         message: "Incorrect email and password combination"
      });
   }

   // Authenticate user with jwt
  const token = jwt.sign({id:user.id},
   JWT_SECRET,
   {
      expiresIn:JWT_REFRESH_EXPIRATION
   });

   res.status(200).send({
      id:user.id,
      name:user.name,
      email:user.email,
      accessToken:token,
   });

} catch (error) {
   return res.status(500).json({
      message: "Sign in error"
   });
}

}