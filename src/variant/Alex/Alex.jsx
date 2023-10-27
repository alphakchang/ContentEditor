import React, { Component } from 'react';
import ContentInput from '../../components/Input/ContentInput/ContentInput';
import NumberVariable from '../../components/Input/NumberVariable/NumberVariable';
import AlexOutput from './AlexOutput';
import { ArrowDownCircleFill } from 'react-bootstrap-icons'

class Alex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            proxy: props.proxy,
            input: '',
            charLimit: 0
        };
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value}, () => {
            // console.log(`intput: ${this.state.input}`);
        });
    }

    onNumberChange = (event) => {
        this.setState({charLimit: event.target.value}, () => {
            // console.log(`Character limit: ${this.state.charLimit}`);
        });
    }

    render() {
        const { proxy, input, charLimit } = this.state;
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
                <AlexOutput proxy={proxy} input={input} charLimit={charLimit} />
            </div>
        );
    }
}

export default Alex;