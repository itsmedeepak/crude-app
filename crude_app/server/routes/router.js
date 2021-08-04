const express = require("express");
const route = express.Router();

const services= require('../services/render');
route.get('/', services.homeRoutes);

const controller = require("../controller/controller")


/**
 * @description Root Route
 * @method GET /
 */

route.get('/add-user', services.add_user);

/**
 * @description add-user
 * @method GET /add-user
 */

route.get('/update-user', services.update_user);

/**
 * @description update-user
 * @method GET /update-user
 */


//API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);



module.exports = route