import * as express from "express";

export default class Routes {
    public static Register(app: express.Application) {
        const indexRouter = express.Router();

        indexRouter.get("", (req: express.Request, res: express.Response) => {
            res.send("Is this thing on?");
        });

        app.use("/", indexRouter);
    }
}