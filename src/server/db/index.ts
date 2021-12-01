import * as mysql from "mysql";
import config from "../config";

export const Connection = mysql.createConnection({
    host: config.mysql.host,
    port: Number(config.mysql.port),
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
});

Connection.connect((err) => {
  if (err) console.log(err);
});

export const Query = (query: string, values?: any) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err: any, results: any) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};


// Put this in config file
// 
// export default {
//   mysql: {
//     host: "localhost",
//     port: 3306,
//     user: "",
//     password: "",
//     database: "mydatabase",
//   },
