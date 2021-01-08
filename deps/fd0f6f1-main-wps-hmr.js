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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Component A: ", otherProps.a, " ", otherProps.b, " ", otherProps.c, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", otherProps, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXN0ZWRfY2hpbGRyZW4vLi9zcmMvbGliL2NvbXBvbmVudHMvQ29tcG9uZW50QS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRBIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldFByb3BzIiwib3RoZXJQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJhIiwiYiIsImMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxRQURtQixHQUNrQkQsS0FEbEIsQ0FDbkJDLFFBRG1CO0FBQUEsTUFDVEMsUUFEUyxHQUNrQkYsS0FEbEIsQ0FDVEUsUUFEUztBQUFBLE1BQ0lDLFVBREosNEJBQ2tCSCxLQURsQjs7QUFFMUJJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLFVBQVUsQ0FBQ0csQ0FBdkMsRUFBMENILFVBQVUsQ0FBQ0ksQ0FBckQsRUFBd0RKLFVBQVUsQ0FBQ0ssQ0FBbkU7QUFFQSxzQkFDSSx5RkFDa0JMLFVBQVUsQ0FBQ0csQ0FEN0IsT0FDaUNILFVBQVUsQ0FBQ0ksQ0FENUMsT0FDZ0RKLFVBQVUsQ0FBQ0ssQ0FEM0QsZUFFSSxrRUFBU0wsVUFBVCxFQUNLRixRQURMLENBRkosQ0FESjtBQVNILENBYkQ7O0FBZUFGLFVBQVUsQ0FBQ1UsWUFBWCxHQUEwQixFQUExQjtBQUVBVixVQUFVLENBQUNXLFNBQVgsR0FBdUI7QUFDbkI7QUFDSjtBQUNBO0FBQ0lDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKSzs7QUFNbkI7QUFDSjtBQUNBO0FBQ0E7QUFDSVgsVUFBUSxFQUFFVSxpREFBUyxDQUFDRSxJQVZEOztBQVluQjtBQUNKO0FBQ0E7QUFDSWIsVUFBUSxFQUFFVyxpREFBUyxDQUFDRyxJQWZEOztBQWlCbkI7QUFDSjtBQUNBO0FBQ0lULEdBQUMsRUFBRU0saURBQVMsQ0FBQ0MsTUFwQk07O0FBdUJuQjtBQUNKO0FBQ0E7QUFDSU4sR0FBQyxFQUFFSyxpREFBUyxDQUFDQyxNQTFCTTs7QUE2Qm5CO0FBQ0o7QUFDQTtBQUNJTCxHQUFDLEVBQUVJLGlEQUFTLENBQUNDO0FBaENNLENBQXZCO0FBcUNlZCx5RUFBZixFIiwiZmlsZSI6ImZkMGY2ZjEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBDb21wb25lbnRBID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBzZXRQcm9wcywgLi4ub3RoZXJQcm9wc30gPSBwcm9wcztcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBvbmVudCBBOlwiLCBvdGhlclByb3BzLmEsIG90aGVyUHJvcHMuYiwgb3RoZXJQcm9wcy5jKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDb21wb25lbnQgQToge290aGVyUHJvcHMuYX0ge290aGVyUHJvcHMuYn0ge290aGVyUHJvcHMuY31cbiAgICAgICAgICAgIDxkaXYgey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59XG5cbkNvbXBvbmVudEEuZGVmYXVsdFByb3BzID0ge307XG5cbkNvbXBvbmVudEEucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBXG4gICAgICovXG4gICAgYTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIFxuICAgIC8qKlxuICAgICAqIEFcbiAgICAgKi9cbiAgICBiOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgXG4gICAgLyoqXG4gICAgICogQVxuICAgICAqL1xuICAgIGM6IFByb3BUeXBlcy5zdHJpbmcsXG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50QTsiXSwic291cmNlUm9vdCI6IiJ9