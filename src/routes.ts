import { Router } from 'express';

import UserController from '@controllers/UserController';
import validators from '@helpers/validators';
import auth from '@helpers/auth';

const routes = Router();

routes.use(auth);

routes.route('/users')
  .get(UserController.index)
  .post(validators.user, UserController.store);

export default routes;
