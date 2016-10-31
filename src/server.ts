import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import Routes from "./routes";
import Logger from "./logger";

export class Server {

  public app: express.Application;

  public run(port: number): void {
    this.app.listen(port);  
  }

  constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    Logger.Register(this.app);
    Routes.Register(this.app);

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  }
}