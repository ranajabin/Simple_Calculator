sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("simplecalculator1.simplecalculatorproject.controller.View1", {
            onInit: function () {

            },
            onPressAdd: function () {
                var val1 = this.getView().byId("inp1").getValue();
                var val2 = this.getView().byId("inp2").getValue();

                var val3 = parseInt(val1) + parseInt(val2);
                alert("Addition = " + val3);
            },

            onPressSub: function () {
                var val1 = this.getView().byId("inp1").getValue();
                var val2 = this.getView().byId("inp2").getValue();

                var val3 = parseInt(val2) - parseInt(val1);
                alert("Subtraction = " + val3);
            },

            onPressMul: function () {
                var val1 = this.getView().byId("inp1").getValue();
                var val2 = this.getView().byId("inp2").getValue();

                var val3 = parseInt(val1) * parseInt(val2);
                alert("Multiplication = " + val3);
            },

            onPressDiv: function () {
                var val1 = this.getView().byId("inp1").getValue();
                var val2 = this.getView().byId("inp2").getValue();

                var val3 = parseInt(val1) / parseInt(val2);
                alert("Division = " + val3);
            }
        });
    });
