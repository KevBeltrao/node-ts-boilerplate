import { NextFunction, Request, Response } from 'express';
import { hash } from 'bcryptjs';

import User from '@models/User';

class UserController {
  public async index (req: Request, res: Response, next: NextFunction): Promise<void> {
    const users = await User.find();

    res.locals.message = users;
    return next();
  }

  public async store (req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.locals.status = 400;

      return next('User already exists');
    }

    req.body.password = await hash(password, 10);

    const newUser = await User.create(req.body);

    res.locals.messsage = newUser;
    res.locals.status = 201;

    return next();
  }
}

export default new UserController;
