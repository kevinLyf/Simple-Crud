import User from '../models/User.js';

const createUserService = (body) => User.create(body);
const getUserByIdService = (id) => User.findById(id);
const getAllService = () => User.find();
const deleteUserService = (id) => User.findByIdAndDelete(id);
const updateUserService = (id, name, email, password, birth, fone) =>
  User.findOneAndUpdate({ _id: id }, { name, email, password, birth, fone });

export { createUserService, getAllService, getUserByIdService, updateUserService, deleteUserService };
