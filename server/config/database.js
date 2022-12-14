const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const link = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log(`MongoDB connected: ${link.connection.host}`);
    } catch (error) {
        console.log(error)
    }
}



module.exports = connectDB;