import { createConnection, getConnection } from "typeorm";
// import { User } from "../entities/User";

let connectionReadyPromise: Promise<void> | null = null;

export function prepareConnection() {
  console.log('connection to db')
  if (!connectionReadyPromise) {
    connectionReadyPromise = (async () => {
      // clean up old connection that references outdated hot-reload classes
      try {
        const staleConnection = getConnection();
        await staleConnection.close();
      } catch (error) {
        // no stale connection to clean up
      }
      // wait for new default connection
      await createConnection({
        type: "postgres",
        host: "localhost",
        database: "nextjs_graphql",
        username: "nextjs",
        password: "nextjs",
        port: 5432,
        // entities: [User],
        synchronize: process.env.NODE_ENV === "development",
        logging: process.env.NODE_ENV === "development",
      });
    })();
  }

  return connectionReadyPromise;
}
