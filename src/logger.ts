import * as express from 'express';

export default class Logger {
    public static Register(app: express.Application) {
        app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {
            console.info(`${(new Date()).toUTCString()}|${req.method}|${req.url}|${req.ip}`);
            next();
        });
    }
}