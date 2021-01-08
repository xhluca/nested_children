import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const ComponentB = (props) => {
    const { children, setProps, ...otherProps } = props;

    const newChildren = React.Children.map(children, child => React.cloneElement(child, otherProps));

    return (
        <div>
            Component B: ({otherProps.a} {otherProps.b} {otherProps.c}) {otherProps.d} {otherProps.e}
            <div {...otherProps}>
                {newChildren}
            </div>
        </div>
    );

}

ComponentB.defaultProps = {};

ComponentB.propTypes = {
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

};


export default ComponentB;