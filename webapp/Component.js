sap.ui.define([
	"sap/ui/core/UIComponent",
	"nacho1/UI5_2/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function (UIComponent, models, ResourceModel, HelloDialog) {
	"use strict";
<<<<<<< Upstream, based on origin/master

=======
    
>>>>>>> cadf751 commit nuevo
	return UIComponent.extend("nacho1.UI5_2.Component", {

		metadata: {
			manifest: "json"
		},
		/*	rootView: {
				"viewName": "nacho1.UI5_2.view.app",
				"type": "XML",
				"async": "true",
				"id": "app"
			}*/

		init: function () {

			// call init component del padre
			UIComponent.prototype.init.apply(this, arguments);

			// Set model for view
			this.setModel(models.createPersona());

			//set i18n
			var i18nModel = new ResourceModel({
				bundleName: "nacho1.UI5_2.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

			this._helloDialog = new HelloDialog(this.getRootControl());

		},

		exit: function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function(){ 
			this._helloDialog.open();
		}
	});
});