import "dotenv/config";
import express from "express";
import { engine } from "express-handlebars";
import { TaskRoutes } from "./routes/task-routes";
import { ViewRoutes } from "./routes/views-routes";
import { Logger } from "@packages/logger";
import { connect } from "./database/config";

const bootstrap = async () => {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  // Set up handlebars as the view engine
  app.engine(
    "hbs",
    engine({
      extname: "hbs",
      defaultLayout: "index",
      helpers: {
        concat: function () {
          const args = Array.prototype.slice.call(arguments, 0, -1);
          return args.join("");
        },
      },
    })
  );
  app.set("view engine", "hbs");
  app.set("views", "src/views");

  // Set up the routes
  app.use(ViewRoutes);
  app.use(TaskRoutes);

  // Start the server
  try {
    app.listen(port, () => {
      Logger.debug(`Server is running on port ${port}`);
    });
  } catch (error: any) {
    Logger.error("Failed to start the server: ", error);
    throw new Error(error);
  }
};

// Connect to the database and start the server after the connection is established
connect(() => bootstrap());
