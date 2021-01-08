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

  console.log(otherProps.a, otherProps.b, otherProps.c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXN0ZWRfY2hpbGRyZW4vLi9zcmMvbGliL2NvbXBvbmVudHMvQ29tcG9uZW50QS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRBIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldFByb3BzIiwib3RoZXJQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJhIiwiYiIsImMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxRQURtQixHQUNrQkQsS0FEbEIsQ0FDbkJDLFFBRG1CO0FBQUEsTUFDVEMsUUFEUyxHQUNrQkYsS0FEbEIsQ0FDVEUsUUFEUztBQUFBLE1BQ0lDLFVBREosNEJBQ2tCSCxLQURsQjs7QUFFMUJJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFVLENBQUNHLENBQXZCLEVBQTBCSCxVQUFVLENBQUNJLENBQXJDLEVBQXdDSixVQUFVLENBQUNLLENBQW5EO0FBRUEsc0JBQ0ksa0VBQVNMLFVBQVQsRUFDS0YsUUFETCxDQURKO0FBTUgsQ0FWRDs7QUFZQUYsVUFBVSxDQUFDVSxZQUFYLEdBQTBCLEVBQTFCO0FBRUFWLFVBQVUsQ0FBQ1csU0FBWCxHQUF1QjtBQUNuQjtBQUNKO0FBQ0E7QUFDSUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpLOztBQU1uQjtBQUNKO0FBQ0E7QUFDQTtBQUNJWCxVQUFRLEVBQUVVLGlEQUFTLENBQUNFLElBVkQ7O0FBWW5CO0FBQ0o7QUFDQTtBQUNJYixVQUFRLEVBQUVXLGlEQUFTLENBQUNHLElBZkQ7O0FBaUJuQjtBQUNKO0FBQ0E7QUFDSVQsR0FBQyxFQUFFTSxpREFBUyxDQUFDQyxNQXBCTTs7QUF1Qm5CO0FBQ0o7QUFDQTtBQUNJTixHQUFDLEVBQUVLLGlEQUFTLENBQUNDLE1BMUJNOztBQTZCbkI7QUFDSjtBQUNBO0FBQ0lMLEdBQUMsRUFBRUksaURBQVMsQ0FBQ0M7QUFoQ00sQ0FBdkI7QUFxQ2VkLHlFQUFmLEUiLCJmaWxlIjoiZDUxYjJkZi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXG4gKiBkaXNwbGF5cyBpdC5cbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXG4gKi9cbmNvbnN0IENvbXBvbmVudEEgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIHNldFByb3BzLCAuLi5vdGhlclByb3BzfSA9IHByb3BzO1xuICAgIGNvbnNvbGUubG9nKG90aGVyUHJvcHMuYSwgb3RoZXJQcm9wcy5iLCBvdGhlclByb3BzLmMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn1cblxuQ29tcG9uZW50QS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuQ29tcG9uZW50QS5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZHJlblxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFcbiAgICAgKi9cbiAgICBhOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgXG4gICAgLyoqXG4gICAgICogQVxuICAgICAqL1xuICAgIGI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBBXG4gICAgICovXG4gICAgYzogUHJvcFR5cGVzLnN0cmluZyxcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRBOyJdLCJzb3VyY2VSb290IjoiIn0=