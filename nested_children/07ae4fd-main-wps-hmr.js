webpackHotUpdatenested_children("main",{

/***/ "./src/lib/components/ComponentA.js":
/*!******************************************!*\
  !*** ./src/lib/components/ComponentA.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var ComponentA = function ComponentA(props) {
  var children = props.children,
      setProps = props.setProps,
      otherProps = _objectWithoutProperties(props, ["children", "setProps"]);

  console.log("Component A:", otherProps.a, otherProps.b, otherProps.c);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", otherProps, children);
};

ComponentA.defaultProps = {};
ComponentA.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Children
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A
   */
  a: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A
   */
  b: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A
   */
  c: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ComponentA);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXN0ZWRfY2hpbGRyZW4vLi9zcmMvbGliL2NvbXBvbmVudHMvQ29tcG9uZW50QS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRBIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldFByb3BzIiwib3RoZXJQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJhIiwiYiIsImMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxRQURtQixHQUNrQkQsS0FEbEIsQ0FDbkJDLFFBRG1CO0FBQUEsTUFDVEMsUUFEUyxHQUNrQkYsS0FEbEIsQ0FDVEUsUUFEUztBQUFBLE1BQ0lDLFVBREosNEJBQ2tCSCxLQURsQjs7QUFFMUJJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLFVBQVUsQ0FBQ0csQ0FBdkMsRUFBMENILFVBQVUsQ0FBQ0ksQ0FBckQsRUFBd0RKLFVBQVUsQ0FBQ0ssQ0FBbkU7QUFFQSxzQkFDSSxrRUFBU0wsVUFBVCxFQUNLRixRQURMLENBREo7QUFNSCxDQVZEOztBQVlBRixVQUFVLENBQUNVLFlBQVgsR0FBMEIsRUFBMUI7QUFFQVYsVUFBVSxDQUFDVyxTQUFYLEdBQXVCO0FBQ25CO0FBQ0o7QUFDQTtBQUNJQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSks7O0FBTW5CO0FBQ0o7QUFDQTtBQUNBO0FBQ0lYLFVBQVEsRUFBRVUsaURBQVMsQ0FBQ0UsSUFWRDs7QUFZbkI7QUFDSjtBQUNBO0FBQ0liLFVBQVEsRUFBRVcsaURBQVMsQ0FBQ0csSUFmRDs7QUFpQm5CO0FBQ0o7QUFDQTtBQUNJVCxHQUFDLEVBQUVNLGlEQUFTLENBQUNDLE1BcEJNOztBQXVCbkI7QUFDSjtBQUNBO0FBQ0lOLEdBQUMsRUFBRUssaURBQVMsQ0FBQ0MsTUExQk07O0FBNkJuQjtBQUNKO0FBQ0E7QUFDSUwsR0FBQyxFQUFFSSxpREFBUyxDQUFDQztBQWhDTSxDQUF2QjtBQXFDZWQseUVBQWYsRSIsImZpbGUiOiIwN2FlNGZkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgQ29tcG9uZW50QSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgc2V0UHJvcHMsIC4uLm90aGVyUHJvcHN9ID0gcHJvcHM7XG4gICAgY29uc29sZS5sb2coXCJDb21wb25lbnQgQTpcIiwgb3RoZXJQcm9wcy5hLCBvdGhlclByb3BzLmIsIG90aGVyUHJvcHMuYyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxufVxuXG5Db21wb25lbnRBLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5Db21wb25lbnRBLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENoaWxkcmVuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogQVxuICAgICAqL1xuICAgIGE6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBBXG4gICAgICovXG4gICAgYjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIFxuICAgIC8qKlxuICAgICAqIEFcbiAgICAgKi9cbiAgICBjOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudEE7Il0sInNvdXJjZVJvb3QiOiIifQ==