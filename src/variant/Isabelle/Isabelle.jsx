import React, { Component } from 'react';
import ThreeInput from '../../components/Input/ThreeInput/ThreeInput';
import ThreeInputCompare from './ThreeInputCompare';

class Isabelle extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            proxy: props.proxy,
            input1: '',
            input2: '',
            input3: ''
        };
    }

    onInputChange1 = (event) => {
        this.setState({input1: event.target.value}, () => {
            // console.log(`intput1: ${this.state.input1}`);
        });
    }

    onInputChange2 = (event) => {
        this.setState({input2: event.target.value}, () => {
            // console.log(`intput2: ${this.state.input2}`);
        });
    }

    onInputChange3 = (event) => {
        this.setState({input3: event.target.value}, () => {
            // console.log(`intput3: ${this.state.input3}`);
        });
    }

    render() {
        const { proxy, input1, input2, input3 } = this.state;
        return (
            <div>
                <ThreeInput onInputChange1={this.onInputChange1} onInputChange2={this.onInputChange2} onInputChange3={this.onInputChange3} />
                <ThreeInputCompare proxy={proxy} input1={input1} input2={input2} input3={input3} />
            </div>
        );
    }
}

export default Isabelle;