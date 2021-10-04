require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');
const Post = require('./models/post');
const userModule = require('./models/user');

connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', require('./routes/usersRoute'));
app.use('/posts', require('./routes/postsRoute'));

async function check() {
  try {
    const x = await Post.find({ userRef: '614d70b6225d2851baa2b782' });

    console.log(x);
  } catch (error) {
    console.log(error);
  }
}
check();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running op port ${PORT}`));
