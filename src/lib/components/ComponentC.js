import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const ComponentC = (props) => {
    const { children, setProps, ...otherProps } = props;

    return (
        <div>
            Component C: ({otherProps.a} {otherProps.b} {otherProps.c} {otherProps.d} {otherProps.e}) {otherProps.f} {otherProps.g}
            <div {...otherProps}>
                {children}
            </div>
        </div>
    );

}

ComponentC.defaultProps = {};

ComponentC.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Children
     */
    children: PropTypes.node,

    /**
     * A
     */
    a: PropTypes.string,


    /**
     * A
     */
    b: PropTypes.string,


    /**
     * A
     */
    c: PropTypes.string,

    /**
     * A
     */
    d: PropTypes.string,

    /**
     * A
     */
    e: PropTypes.string,

    /**
     * A
     */
    f: PropTypes.string,

    /**
     * A
     */
    g: PropTypes.string,

};


export default ComponentC;