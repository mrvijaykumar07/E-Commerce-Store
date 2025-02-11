import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Manually provide the MongoDB URI string
    const url = "mongodb://localhost:27017/MasalaDatabase"; // Replace this with your actual MongoDB URL

    // Connect to MongoDB using the provided URL
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
