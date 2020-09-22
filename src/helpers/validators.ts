import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

export default {
  user: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ):Promise<void> => {
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return next({ error: 'Validation fails' });
    }

    return next();
  }
}
