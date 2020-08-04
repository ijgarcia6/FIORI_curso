sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("nacho1.UI5_2.controller.app", {

		onInit: function () {

		},
   
		onOpenDialog2    : function () {
			this.getOwnerComponent().openHelloDialog();
		}

	});
});