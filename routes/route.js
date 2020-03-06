module.exports = function(app){

    var taskController = require('../app/controllers/assignmentController');

    app.route("/task")
    .get(taskController.findAll)
    .post(taskController.create)


    app.route("/task/:id")
    .get(taskController.findByPk)
    .delete(taskController.delete)
    .put(taskController.update)
}
