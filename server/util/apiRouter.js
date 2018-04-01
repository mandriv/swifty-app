import { Router } from 'express';

// controllers
import UserController from '../user/controller';


const routes = new Router();
// Users
routes.post('/users', UserController.create);

export default routes;
