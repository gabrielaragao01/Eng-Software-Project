import BaseRoute from './baseRoute.js';
import UserController from '../controllers/UserController.js';
import UserSchema from '../schemas/UserSchema.js';

class UserRoutes extends BaseRoute {
    setup() {
        this.routes.post('/login', this.schemaValidator.validate(UserSchema.login), UserController.login);
        this.routes.post('/', this.schemaValidator.validate(UserSchema.create), UserController.create);
        this.routes.get('/', this.schemaValidator.validate(UserSchema.list), UserController.list);
        this.routes.post('/find', this.schemaValidator.validate(UserSchema.find), UserController.find);
        this.routes.put('/:id', this.schemaValidator.validate(UserSchema.update), UserController.update);
        this.routes.delete('/:id', this.schemaValidator.validate(UserSchema.find), UserController.delete);

        return this.routes
    }
}

export default new UserRoutes()
