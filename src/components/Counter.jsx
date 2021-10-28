import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 };
    }

    handleChange = async (operation) => {
        console.log(operation);
        let newCount = null;

        switch(operation){
            case "plus":
                newCount = this.state.count + 1;
                break;
            case "moins" :
                newCount = this.state.count - 1;
                break;
            case "zero":
                newCount = 0;
                break;
            default:
                newCount = 0;
        }
        await this.setState({ count: newCount });
        //appel a une methode de App
        this.props.handlePlusApp(this.state.count);
    };

    //  ---------PRIMERA MANERA DE HACER------------

    // handlePlus = async () => {
    //     let newCount = this.state.count + 1;
    //     await this.setState({ count: newCount });
    //     //appel a une methode de app
    //     this.props.handlePlusApp(this.state.count);
    // };
    // handleMoins = async () => {
    //     let newCount = this.state.count - 1;
    //     await this.setState({ count: newCount });
    //     //appel a une methode de app
    //     this.props.handlePlusApp(this.state.count);
    // };
    // reset = async () => {
    //     await this.setState({ count: 0 });
    //     //appel a une methode de app
    //     this.props.handlePlusApp(this.state.count);
    // };

    render() {
        return (
            <>
                <span>{this.state.count}</span>
                <button onClick={() => this.handleChange("plus")}>+</button>
                <button onClick={() => this.handleChange("moins")}>-</button>
                <button onClick={() => this.handleChange("zero")}>Reset</button>
            </>
    );
    }

}



export default Counter;