"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env file");
}
const serverConfig = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
};
exports.default = serverConfig;
