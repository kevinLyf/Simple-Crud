import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectionDatabase = () => {
    mongoose.connect(process.env.MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected!');
    })
    .catch ((err) => {
        console.log(err);
    });
};

export default connectionDatabase;

