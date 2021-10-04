const mongoose = require('mongoose');

const connectionString = process.env.DATABASE_CONNECTION;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      //useCreateIndex: true,
      //useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log('Mongodb connection SUCCESS ✅ ');
  } catch (error) {
    console.log('Mongodb connection FAIL 🛑');
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
