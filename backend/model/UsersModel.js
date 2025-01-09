const { model } = require("mongoose");

const {usersSchema} = require("../schemas/UsersSchema");

const UsersModel =new model("User",usersSchema);


module.exports = {UsersModel}