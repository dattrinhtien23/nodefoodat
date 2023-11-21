import express from "express";
import homeController from "../controllers/homeController";
import userControler from "../controllers/userController";
import foodController from "../controllers/foodController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);

    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    //--------------------- API ---------------
    router.post('/api/login', userControler.handleLogin);
    router.get('/api/get-all-users', userControler.handleGetAllUsers);
    router.post('/api/create-new-user', userControler.handleCreateNewUser);
    router.put('/api/edit-user', userControler.handleEditUser);
    router.delete('/api/delete-user', userControler.handleDeleteUser); //restAPI

    router.get('/api/allcode', userControler.getAllCode);
    router.get('/api/top-food-home', foodController.getTopChefHome);



    return app.use("/", router);
}

module.exports = initWebRoutes;