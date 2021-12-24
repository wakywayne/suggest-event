import * as mysql from "mysql";
import config from "../config";

var connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host: config.mysql.host,
    port: Number(config.mysql.port),
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  });

  connection.connect(function (err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on("error", function (err) {
    console.log("db error", err.code);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();

export const Query = (query: string, values?: any) => {
  console.log("query connecting");
  return new Promise<Array<any>>((resolve, reject) => {
    connection.query(query, values, (err: any, results: any) => {
      if (err) console.log("ERRERERERERE", err);
      return resolve(results);
    });
  });
};