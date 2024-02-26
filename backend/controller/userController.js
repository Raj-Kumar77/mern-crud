const User = require('../model/userModel')

const createUserController = async(req,res) =>{
    try {
        const {fname,lname,email,mobile,project} = req.body
        const newUser = await new User({fname,lname,email,mobile,project}).save()
        if(newUser){
            res.status(200).send({
                success: true,
                message: 'User Created',
                newUser
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message:'Error creating user'
        })
    }
}

const allUsers = async(req,res) =>{
    try {
        const users = await User.find({})
        if(users){
            res.status(200).send({
                success: true,
                message:"all users",
                users
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
          message: "Error getting user",
        });
    }
}


const singleUser = async(req,res) =>{
    try {
        const {id} = req.params
        const singleUser = await User.findById(id)
        if(singleUser){
            res.status(200).send({
                success: true,
                message: 'Single user',
                singleUser
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
          message: "Error getting single user",
        });
    }
}

const updateUser = async(req,res) =>{
    try {
         const { fname, lname, email, mobile, project } = req.body;
         const {id} = req.params
         const updatedUser = await User.findByIdAndUpdate(id,{fname,lname,email,mobile,project},{new:true})
         if(updateUser){
            res.status(200).send({
                success: true,
                message: "user updated",
                updatedUser
            })
         }
    } catch (error) {
        console.log(error);
        res.status(400).send({
          message: "Error updating user",
        });
    }
}

const deleteUser = async(req,res) =>{
    try {
        const {id} = req.params
        const deletedUser = await User.findByIdAndDelete(id)
        if(deletedUser){
            res.status(200).send({
                success: true,
                message: 'user deleted',
                deleteUser
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
          message: "Error deleting user",
        });
    }
}

module.exports = {
  createUserController,
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
};