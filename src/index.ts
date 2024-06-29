import express from "express";
import { Logger } from "@packages/logger";

import "dotenv/config";

import { connect } from "./database/config";

const app = express();
const port = process.env.PORT || 8080;

const bootstrap = async () => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    Logger.debug(`Server is running on port ${port}`);
  });
};

// Connect to the database and start the server after the connection is established
connect(() => bootstrap());
