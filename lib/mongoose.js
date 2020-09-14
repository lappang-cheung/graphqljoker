import mongoose from 'mongoose';

const connectDB = (handler) => async(req, res) => {
    if(mongoose.connections[0].readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    return handler(req,res)
}

const db = mongoose.connection;

db.once('open', () => {
    console.log('Conencted to mongo')
});

export default connectDB;

// console.log(process.env.MONGO_URL)