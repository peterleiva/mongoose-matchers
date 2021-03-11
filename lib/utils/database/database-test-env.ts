import { Connection } from "mongoose";
import { connect, disconnect } from "./database-setup";

/**
 * Add hooks to connect to database with a optional cleanup, whichs remove all
 * database data before each test to run
 * @param cleanup
 */
export default function (cleanup = false): void {
  let connection: Connection;

  beforeAll(async () => {
    connection = await connect();
  });

  if (cleanup) {
    beforeEach(async () => {
      await connection.dropDatabase();
    });
  }

  afterAll(disconnect);
}
