/* eslint-disable no-console */
import app from "./app";
import { Server } from "http";
import mongoose from "mongoose";
import { envVars } from "./config/env";
const port = process.env.PORT || 5000;
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Cannected to DB");

    server = app.listen(port, () => {
      console.log(`Server is running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// unhandledRejection error handling
process.on("unhandledRejection", (err) => {
  console.log(`unhandled Rejection error: ${err}`);
  if (server) {
    server.close(() => {
      process.exit();
    });

    process.exit();
  }
});
// uncaughtExceptionMonitor  error handling
process.on("uncaughtException", (err) => {
  console.log(`uncaught Exception  Rejection error: ${err}`);
  if (server) {
    server.close(() => {
      process.exit();
    });

    process.exit();
  }
});
// SIGINT  error handling
process.on("SIGINT", (err) => {
  console.log(`SIGINT signal  error: ${err}`);
  if (server) {
    server.close(() => {
      process.exit();
    });

    process.exit();
  }
});

startServer();
