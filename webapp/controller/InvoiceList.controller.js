sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (JSONModel, Controller) {

	return Controller.extend("nacho1.UI5_2.controller.InvoiceList", {

       onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
	});
});