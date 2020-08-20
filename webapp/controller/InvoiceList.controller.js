sap.ui.define([
	"sap/ui/core/mvc/Controller",
<<<<<<< Upstream, based on origin/master
	"sap/ui/model/json/JSONModel"
], function (JSONModel, Controller) {

	return Controller.extend("nacho1.UI5_2.controller.InvoiceList", {

       onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
=======
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (JSONModel, Controller, formatter, Filter, FilterOperator)  {
    
	return Controller.extend("nacho1.UI5_2.controller.InvoiceList", {

		formatter: formatter,

/*		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}*/
		onFilterInvoices: function(oEvent) {
	
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			
			var oList = this.byId("invoicesList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
		}
	
>>>>>>> cadf751 commit nuevo
	});
});