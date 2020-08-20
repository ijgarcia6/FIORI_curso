sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
	"use strict";
<<<<<<< Upstream, based on origin/master

=======
  
>>>>>>> cadf751 commit nuevo
	return Controller.extend("nacho1.UI5_2.controller.helloPanel", {

		onInit: function () {

		},

		onShowHola: function () {

			// read from i18n from model
			var textHola = this.getView().getModel("i18n").getResourceBundle().getText("holaText");
			var vHola = this.getView().getModel().getProperty("/persona/nombre");
			var sMsg = vHola.concat(" ").concat(textHola);

			MessageToast.show(sMsg);

		},

		onOpenDialog: function () {
			///	MessageToast.show(sMsg);
			this.getOwnerComponent().openHelloDialog();
		}

	});
});