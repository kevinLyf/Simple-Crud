import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birth: { type: String, required: true },
    fone: { type: String, required: true }
});

userSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const user = mongoose.model('User', userSchema);

export default user;