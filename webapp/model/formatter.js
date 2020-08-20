sap.ui.define([],
	function () {

		return {
			statusText: function(sStatus) {
				//var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
				
				switch(sStatus) {
					case "A" : return "New";//resourceBundle.getText("invoiceStausA");
					case "B" : return "In Progress";//resourceBundle.getText("invoiceStausB");
					case "C" : return "Done";//resourceBundle.getText("invoiceStausC");
					default : return sStatus;
				}
			}

		};

	});