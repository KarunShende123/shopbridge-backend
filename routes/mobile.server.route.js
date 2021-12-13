const mobileController = require("../controllers/mobile.server.controller");

module.exports = function(app){
    app.route("/mobile")
        .get(mobileController.getMobileList)
        .post(mobileController.saveMobileData)
        .put(mobileController.updateMobileData)

    app.route("/mobile/:id")
        .delete(mobileController.deleteMobileDataById)
        .get(mobileController.getMobileDataById)
}