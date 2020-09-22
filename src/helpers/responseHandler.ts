import { Request, Response } from 'express';

export default (req: Request, res: Response):Response => {
  if (process.env.NODE_ENV === 'development') {
    const {
      status, message,
    } = res.locals;

    if (!message) {
      return res.status(404).json({
        message: 'Route not found',
      });
    }

    return res.status(status || 200).json({
      data: res.locals.message,
    });
  }
  
  return res.status(500).json({ error: 'Internal server error' });
};
