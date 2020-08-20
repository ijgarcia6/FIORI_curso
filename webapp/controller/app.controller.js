sap.ui.define([
	"sap/ui/core/mvc/Controller",
<<<<<<< Upstream, based on origin/master
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("nacho1.UI5_2.controller.app", {

		onInit: function () {
=======
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("nacho1.UI5_2.controller.app", {
	
		onInit: function () {
		
		var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
>>>>>>> cadf751 commit nuevo

		},
   
		onOpenDialog2    : function () {
			this.getOwnerComponent().openHelloDialog();
		}

	});
});