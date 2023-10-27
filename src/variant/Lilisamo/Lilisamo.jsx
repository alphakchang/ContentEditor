import React, { Component } from 'react';
import Prompt from '../../components/Input/Prompt/Prompt';
import Source from '../../components/Input/Source/Source';

class Lilisamo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            proxy: props.proxy,
            prompt: '',
            source: ''
        }
    }

    onPromptChange = (event) => {
        this.setState({prompt: event.target.value}, () => {
            console.log(`prompt: ${this.state.prompt}`);
        });
    }

    onSourceChange = (event) => {
        this.setState({source: event.target.value}, () => {
            console.log(`source: ${this.state.source}`);
        });
    }

    render() {

        const { proxy, prompt, source } = this.state;

        return (
            <div className="container-lg">
                <Prompt onPromptChange={this.onPromptChange} />
                <Source onSourceChange={this.onSourceChange} />
            </div>
        );
    }
}

export default Lilisamo;