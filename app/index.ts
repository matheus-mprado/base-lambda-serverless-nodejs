import serverless from "serverless-http";
import express from "express";

const app = express();
app.use(express.json());

app.get(
  "/teste",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ message: "Hello World" });
  }
);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send();
  }
);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500).send();
  }
);

export const handler = serverless(app);
