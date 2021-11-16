import * as mysql from "mysql";
import config from "../config";

export const Connection = mysql.createConnection(config.mysql);
// Only thing I can think of is hat the config.mysql isn't working properly
// Maybe I need cors
// Maybe I need the react.json thing

Connection.connect((err) => {
  if (err) console.log(err);
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err: any, results: any) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

// index.ts?:12:12)
