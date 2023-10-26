import React, { Component } from 'react';
import ContentInput from '../../components/ContentInput/ContentInput';
import NumberVariable from '../../components/ContentInput/NumberVariable/NumberVariablae';
import AlexOutput from './AlexOutput';
import { ArrowDownCircleFill } from 'react-bootstrap-icons'

const initialState = {
    input: '',
    charLimit: 0
}

class Alex extends Component {
    
    constructor() {
        super();
        this.state = initialState;
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value}, () => {
            console.log(`intput: ${this.state.input}`);
        });
    }

    onNumberChange = (event) => {
        this.setState({charLimit: event.target.value}, () => {
            console.log(`Character limit: ${this.state.charLimit}`);
        });
    }

    render() {
        const { input, charLimit } = this.state;
        return (
            <div className='container-lg'>
                <ContentInput onInputChange={this.onInputChange} />
                <div className="row">
                    <span>
                    <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary"><ArrowDownCircleFill /> Character Limit</label>
                    </span>
                    <span>
                        <NumberVariable onNumberChange={this.onNumberChange} />
                    </span>
                </div>
                <AlexOutput input={input} charLimit={charLimit} />
            </div>
        );
    }
}

export default Alex;