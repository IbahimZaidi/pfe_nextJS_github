import mysql from "mysql2/promise";

// link to json data :
// https://jsonplaceholder.typicode.com/

export const query_pfe = async ({ query, values }) => {
  const dbConn = await mysql.createConnection({
    host: "localhost",
    database: "testdb",
    user: "root",
    password: "",
    // port: 3306,
  });

  try {
    const [results] = await dbConn.execute(query, values);

    dbConn.end(); // end connection
    return results; // return the table of db.execute(query , values);
  } catch (error) {
    throw new Error(error.message);
  }
};
