webpackHotUpdatenested_children("main",{

/***/ "./src/lib/components/ComponentB.js":
/*!******************************************!*\
  !*** ./src/lib/components/ComponentB.js ***!
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

var ComponentB = function ComponentB(props) {
  var children = props.children,
      setProps = props.setProps,
      otherProps = _objectWithoutProperties(props, ["children", "setProps"]);

  var newChildren = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, otherProps);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Component B: (", otherProps.a, " ", otherProps.b, " ", otherProps.c, ") ", otherProps.d, " ", otherProps.e, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", otherProps, newChildren));
};

ComponentB.defaultProps = {};
ComponentB.propTypes = {
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
  c: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A
   */
  d: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A
   */
  e: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ComponentB);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXN0ZWRfY2hpbGRyZW4vLi9zcmMvbGliL2NvbXBvbmVudHMvQ29tcG9uZW50Qi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRCIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldFByb3BzIiwib3RoZXJQcm9wcyIsIm5ld0NoaWxkcmVuIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY2xvbmVFbGVtZW50IiwiYSIsImIiLCJjIiwiZCIsImUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxRQURtQixHQUNrQkQsS0FEbEIsQ0FDbkJDLFFBRG1CO0FBQUEsTUFDVEMsUUFEUyxHQUNrQkYsS0FEbEIsQ0FDVEUsUUFEUztBQUFBLE1BQ0lDLFVBREosNEJBQ2tCSCxLQURsQjs7QUFHMUIsTUFBTUksV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLFFBQW5CLEVBQTZCLFVBQUFPLEtBQUs7QUFBQSx3QkFBSUgsNENBQUssQ0FBQ0ksWUFBTixDQUFtQkQsS0FBbkIsRUFBMEJMLFVBQTFCLENBQUo7QUFBQSxHQUFsQyxDQUFwQjtBQUVBLHNCQUNJLDBGQUNtQkEsVUFBVSxDQUFDTyxDQUQ5QixPQUNrQ1AsVUFBVSxDQUFDUSxDQUQ3QyxPQUNpRFIsVUFBVSxDQUFDUyxDQUQ1RCxRQUNpRVQsVUFBVSxDQUFDVSxDQUQ1RSxPQUNnRlYsVUFBVSxDQUFDVyxDQUQzRixlQUVJLGtFQUFTWCxVQUFULEVBQ0tDLFdBREwsQ0FGSixDQURKO0FBU0gsQ0FkRDs7QUFnQkFMLFVBQVUsQ0FBQ2dCLFlBQVgsR0FBMEIsRUFBMUI7QUFFQWhCLFVBQVUsQ0FBQ2lCLFNBQVgsR0FBdUI7QUFDbkI7QUFDSjtBQUNBO0FBQ0lDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKSzs7QUFNbkI7QUFDSjtBQUNBO0FBQ0E7QUFDSWpCLFVBQVEsRUFBRWdCLGlEQUFTLENBQUNFLElBVkQ7O0FBWW5CO0FBQ0o7QUFDQTtBQUNJbkIsVUFBUSxFQUFFaUIsaURBQVMsQ0FBQ0csSUFmRDs7QUFpQm5CO0FBQ0o7QUFDQTtBQUNJWCxHQUFDLEVBQUVRLGlEQUFTLENBQUNDLE1BcEJNOztBQXVCbkI7QUFDSjtBQUNBO0FBQ0lSLEdBQUMsRUFBRU8saURBQVMsQ0FBQ0MsTUExQk07O0FBNkJuQjtBQUNKO0FBQ0E7QUFDSVAsR0FBQyxFQUFFTSxpREFBUyxDQUFDQyxNQWhDTTs7QUFrQ25CO0FBQ0o7QUFDQTtBQUNJTixHQUFDLEVBQUVLLGlEQUFTLENBQUNDLE1BckNNOztBQXVDbkI7QUFDSjtBQUNBO0FBQ0lMLEdBQUMsRUFBRUksaURBQVMsQ0FBQ0M7QUExQ00sQ0FBdkI7QUErQ2VwQix5RUFBZixFIiwiZmlsZSI6IjI4MDgxMTctbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBDb21wb25lbnRCID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBzZXRQcm9wcywgLi4ub3RoZXJQcm9wc30gPSBwcm9wcztcblxuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG90aGVyUHJvcHMpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDb21wb25lbnQgQjogKHtvdGhlclByb3BzLmF9IHtvdGhlclByb3BzLmJ9IHtvdGhlclByb3BzLmN9KSB7b3RoZXJQcm9wcy5kfSB7b3RoZXJQcm9wcy5lfVxuICAgICAgICAgICAgPGRpdiB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICAgICAge25ld0NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn1cblxuQ29tcG9uZW50Qi5kZWZhdWx0UHJvcHMgPSB7fTtcblxuQ29tcG9uZW50Qi5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZHJlblxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFcbiAgICAgKi9cbiAgICBhOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgXG4gICAgLyoqXG4gICAgICogQVxuICAgICAqL1xuICAgIGI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBBXG4gICAgICovXG4gICAgYzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEFcbiAgICAgKi9cbiAgICBkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQVxuICAgICAqL1xuICAgIGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50QjsiXSwic291cmNlUm9vdCI6IiJ9