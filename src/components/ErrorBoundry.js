import React , { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    //If anything errors out, it runs this block like try-catch
    componentDidCatch() {
        this.setState({ hasError: true })
    }

    //if component has error, render error message, 
    //otherwise render the component aka children
    render() {
        if (this.state.hasError) {
            return <h1>Ooops, something went very wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
