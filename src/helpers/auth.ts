import { Request, Response, NextFunction } from 'express';

const isAuthenticated = true;

export default async (
  req: Request, 
  res: Response, 
  next: NextFunction,
):Promise<void> => {
  if (isAuthenticated) {
    return next();
  }

  return next('Forbidden');
}