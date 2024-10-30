import { createUser } from "../database/repository/userRepository.js";
import { hashPassword } from "../utils/bcrypt.js";


export const signup = async (req, res, next) => {
  try {
    const {uname,email,password,confirmPassword} = req.body
    if(!uname || !email || !password || !confirmPassword ){
        const error = new Error()
        error.statusCode = 400
        error.message = 'provide All Information'
        throw error
    }
    if(password !== confirmPassword){
        const error = new Error()
        error.statusCode = 400
        error.message = 'password not matching'
        throw error
    }
    const hashPassword = await hashPassword(password)
   await createUser({uname,email,password:hashPassword})

  } catch (error) {
    console.error(error);
    next(error);
  }
};
