const User = require("../models/user");

async function addUser(req, resp){
    const body = req.body;
  
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
      return resp.status(400).json({ status: "error", message: "Missing required fields" });
    }
  
    try {
      const newUser = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
      });
  
      return resp.status(201).json({ status: "success", id: newUser.id });
    } catch (error) {
      console.error(error);
      return resp.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}


async function getAllUsersHandller(req, resp) {
    const allDBusers = await User.find({ });
    console.log(req.headers);
    resp.setHeader("x-myHearder", "shaurabh singh");
    return resp.status(200).json(allDBusers);
}

async function getUserById(req, resp) {
     const user = await User.findById(req.params.id) ;
    if (user) {
      return resp.status(200).json(user);
    } else {
      return resp.status(404).json({ error: "User not found" });
    }
    
}

async function updateUserById(req, resp){
    await user.findByIdAndUpdate(req.find.id, {last_name: "changesd"});
    return resp.status(200).json(user);
}

async function deleteUserById(req, resp){
    await user.findByIdAndDelete(req.find.id);
    return resp.status(202).json(user);
}

module.exports = {
    addUser,
    getAllUsersHandller,
    getUserById,
    updateUserById,
    deleteUserById,
}
