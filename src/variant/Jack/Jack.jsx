import React, { Component } from 'react';
import Title from '../../components/Input/Title/Title';
import Tone from '../../components/Input/Tone/Tone';
import JackOutput from './JackOutput';

class Jack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            proxy: props.proxy,
            title: '',
            tone: ''
        }
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value}, () => {
            console.log(`title: ${this.state.title}`);
        });
    }

    onToneChange = (event) => {
        this.setState({tone: event.target.value}, () => {
            console.log(`tone: ${this.state.tone}`);
        });
    }

    render() {

        const { proxy, title, tone } = this.state;

        return (
            <div className="container-lg">
                <Title onTitleChange={this.onTitleChange} />
                <Tone onToneChange={this.onToneChange} />
                <JackOutput proxy={proxy} title={title} tone={tone} />
            </div>
        );
    }
}

export default Jack;