import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import * as Sentry from '@sentry/node';

import routes from '../routes';
import sentryConfig from '@config/sentry';
import errorHander from '@helpers/errorHander';
import responseHandler from '@helpers/responseHandler';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(Sentry.Handlers.requestHandler());
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.json());
  }

  private database(): void {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  private routes(): void {
    this.express.use(routes);
    this.express.use(errorHander);
    this.express.use(responseHandler);
    this.express.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().express;
