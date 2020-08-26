sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return {

		createPersona: function () {
		var oData = {
			persona : {
				nombre :"Juan"
			}
		};
			return new JSONModel(oData);
		}

	};  

});
