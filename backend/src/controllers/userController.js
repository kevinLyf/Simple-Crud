import {
  createUserService,
  getAllService,
  updateUserService,
  deleteUserService
} from '../services/userService.js';

const create = async (req, res) => {
  try {
    const { name, email, password, birth, fone } = req.body;

    if (!name || !email || !password || !birth || !fone) {
      return res.status(400).json({ message: 'Data required' });
    }

    const user = {
      name,
      email,
      password,
      birth,
      fone,
    };

    await createUserService(user);

    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllService();

    if (users.length === 0) {
      return res.status(200).json({ message: 'There are 0 users' });
    }

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, email, password, birth, fone } = req.body;
    const { id } = req;

    if (!name && !email && !password && !birth && !fone) {
      res.status(400).json({
        message: 'Submit at least one field to update the user',
      });
    }

    await updateUserService(id, name, email, password, birth, fone);

    return res.json({ message: 'User successfully updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await deleteUserService(id);
        
        return res.status(200).json({ message: 'User deleted successfully' });

    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

export { create, getAllUsers, getUserById, update, deleteUser };
