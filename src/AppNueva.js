import React, { Component } from 'react'

class AppNueva extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nose: -9,
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ nose: 1 }), 2000);
    }

    saludar() {
        return <p>Hola chicos!</p>;
    }

    render() {
        const { nose } = this.state;

        return nose < 0 ? (<span>no hay nada</span>) : this.saludar();
    }
}

export default AppNueva;
