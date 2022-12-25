/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"simplecalculator1/simplecalculatorproject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
