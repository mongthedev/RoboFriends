import React, { Component } from 'react';

class ErrorBondary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return  <h1>Oopssss...Robots not working!</h1>
        }
        return this.props.children
    }
}

export default ErrorBondary;