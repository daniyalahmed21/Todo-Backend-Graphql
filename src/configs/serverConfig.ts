import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in .env file");
}

const serverConfig = {
  MONGO_URI: process.env.MONGO_URI as string,
  PORT: process.env.PORT,
};

export default serverConfig;
