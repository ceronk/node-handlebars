const { config } = require('dotenv');
config();
const MONGODB = process.env.DB;
const PORT = process.env.PORT || 3000;

module.exports = { MONGODB, PORT };