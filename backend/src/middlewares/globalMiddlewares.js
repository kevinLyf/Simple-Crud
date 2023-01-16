import mongoose from "mongoose";
import { getUserByIdService } from '../services/userService.js';

const validId = async(req, res, next) => {
    try {
		const id = req.params.id;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: 'Invalid ID' });
		}

		next();

	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

const validUser = async (req, res, next) => {
	try {
		const id = req.params.id;

		const user = await getUserByIdService(id);

		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		req.id = id;
		req.user = user;

		next();
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

export {
    validId,
    validUser
};