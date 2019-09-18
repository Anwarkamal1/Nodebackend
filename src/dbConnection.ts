import mongoose, { connect } from 'mongoose';
const DB_URL = process.env.MONGODB_URL || '';
async function connectDb() {
  try {
    await connect(
      DB_URL,
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log(`Database Connected Successfully!`);
  } catch (error) {
    console.log(`Database Connection fail!`, error);
  }
}

export default connectDb;
