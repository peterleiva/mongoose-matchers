/**
 * @file Uses mongoose to open a database connection with mongodb
 */

import mongoose, { Connection } from "mongoose";

/** @typedef {{database?: string, host?: string, port?: string, password?: string, username?: string}} DatabaseConfig */

interface ConfigurationFile {
  database?: string;
  host?: string;
  port?: string;
  password?: string;
  username?: string;
}

const DEFAULTS: ConfigurationFile = {
  database: "my-project-database",
  host: "localhost",
  port: "27017",
  password: "",
  username: "",
};

/**
 * Uses dev db config if no env is configured
 */
const options: ConfigurationFile = {
  ...DEFAULTS,
  ...process.env,
};

/**
 * Database username and password from config object
 */
const credentials: string =
  options.username && options.password
    ? `${options.database}:${options.password}@`
    : "";

/**
 * Database URI use for connect function to open a mongodb connection. Using
 * env DATABASE_URL as a default if existis
 */
const DATABASE_URL: string =
  process.env.DATABASE_URL ||
  process.env.MONGO_URL ||
  `mongodb://${credentials}${options.host}:${options.port}/` +
    `${options.database}`;

let connection: Connection;

/**
 * Connects asynchronous to MongoDB using mongoose
 *
 * Use mongoose to open a connection using the underlying mondodb driver, sets
 * up the connection using DATABASE_URL and logging the connection events
 *
 * @return {Promise<Connection>} mongoose connection
 */
export async function connect(): Promise<Connection> {
  mongoose.connection.on("open", () => {
    console.info(`\n\t🟢 MondoDB connected to ${DATABASE_URL}\n`);
  });

  mongoose.connection.on("error", error => {
    console.error(error);
  });

  mongoose.connection.on("close", () => {
    console.info(`❌ MongoDB disconnected`);
  });

  try {
    connection = (
      await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
      })
    ).connection;

    return connection;
  } catch (error) {
    console.error(`MongoDB couldn't connect to ${DATABASE_URL}`);
    console.error("Given the following error...");
    throw error;
  }
}

/**
 * Close database connection
 *
 * Uses mongoose connection object to disconnect from mongodb. Also logs a error
 * message if there's any
 *
 * @throws logs and rethrows the error sent by mongoose close connection
 * @return {Promise<void>} mongoose connection promise
 */
export async function disconnect(): Promise<void> {
  try {
    return connection.close();
  } catch (error) {
    console.error("\t❌ Mongoose close connection error\n");
    throw error;
  }
}

process.once("SIGTERM", async () => {
  await disconnect();
  console.warn("Heroku app shuted down");
  process.kill(process.pid, "SIGTERM");
});

process.once("SIGINT", async () => {
  console.info("\nServer Interrupting...");

  await disconnect();
  console.warn("⛔️ Server Shutted Down");
  process.kill(process.pid, "SIGINT");
});

process.once("SIGUSR2", async () => {
  console.info("\nServer Terminating...");

  await disconnect();
  console.info("🔄 Nodemon restarted\n");
  process.kill(process.pid, "SIGUSR2");
});
