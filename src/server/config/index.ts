import * as dotenv from "dotenv";

dotenv.config();

export default {
  mysql: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },

  test: process.env.TESTING_ENV,

  jwt: {
    secret: process.env.JWT_SECRET,
  }
};
