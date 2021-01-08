import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const ComponentA = (props) => {
    const { children, setProps, ...otherProps } = props;

    // Let's insert props a,b,c into the children (ComponentB)
    const newChildren = React.Children.map(children, child => React.cloneElement(child, otherProps));

    return (
        <div>
            Component A: {otherProps.a} {otherProps.b} {otherProps.c}
            <div {...otherProps}>
                {newChildren}
            </div>
        </div>
    );

}

ComponentA.defaultProps = {};

ComponentA.propTypes = {
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

};


export default ComponentA;