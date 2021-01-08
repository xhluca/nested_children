/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';

import { ComponentA, ComponentB, ComponentC } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            a: "hello",
            b: "world",
            c: "foo"
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <ComponentA
                setProps={this.setProps}
                a="hello" b="world" c="foo"
            >
                <ComponentB
                    setProps={this.setProps}
                    d="potato" e="wheat"
                >
                    <ComponentC
                        setProps={this.setProps}
                        f="car" g="motorcycle"
                    />
                </ComponentB>
            </ComponentA>
        )
    }
}

export default App;
