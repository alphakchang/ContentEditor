import React, { Component } from 'react';
import ThreeInput from '../../components/ContentInput/ThreeInput/ThreeInput';
import ThreeInputCompare from '../../components/OutputDisplay/ThreeInputCompare/ThreeInputCompare';

const initialState = {
    input1: '',
    input2: '',
    input3: ''
}

class Isabelle extends Component {
    
    constructor() {
        super();
        this.state = initialState;
    }

    onInputChange1 = (event) => {
        this.setState({input1: event.target.value}, () => {
            console.log(`intput1: ${this.state.input1}`);
        });
    }

    onInputChange2 = (event) => {
        this.setState({input2: event.target.value}, () => {
            console.log(`intput2: ${this.state.input2}`);
        });
    }

    onInputChange3 = (event) => {
        this.setState({input3: event.target.value}, () => {
            console.log(`intput3: ${this.state.input3}`);
        });
    }

    render() {
        const { input1, input2, input3 } = this.state;
        return (
            <div>
                <ThreeInput onInputChange1={this.onInputChange1} onInputChange2={this.onInputChange2} onInputChange3={this.onInputChange3} />
                <ThreeInputCompare input1={input1} input2={input2} input3={input3} />
            </div>
        );
    }
}

export default Isabelle;