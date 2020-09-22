import { Request, Response, NextFunction } from 'express';

import HttpException from '@customTypes/HttpException';

export default async (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  res.locals.message = error.message || error;
  res.locals.status = res.locals.status || 400;

  return next();
};
