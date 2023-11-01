import React, { Component } from 'react';
import Title from '../../components/Input/Title/Title';
import Tone from '../../components/Input/Tone/Tone';
import Keywords from '../../components/Input/Keywords/Keywords';
import JackOutput from './JackOutput';

class Jack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            proxy: props.proxy,
            title: '',
            tone: '',
            keywords: '',
        }
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value}, () => {
            // console.log(`title: ${this.state.title}`);
        });
    }

    onToneChange = (event) => {
        this.setState({tone: event.target.value}, () => {
            // console.log(`tone: ${this.state.tone}`);
        });
    }

    onKeywordsChange = (event) => {
        this.setState({keywords: event.target.value}, () => {
            // console.log(`keywords: ${this.state.keywords}`);
        })
    }

    render() {

        const { proxy, title, tone, keywords } = this.state;

        return (
            <div className="container-lg">
                <Title onTitleChange={this.onTitleChange} />
                <Tone onToneChange={this.onToneChange} />
                <Keywords onKeywordsChange={this.onKeywordsChange} />
                <JackOutput proxy={proxy} title={title} tone={tone} keywords={keywords} />
            </div>
        );
    }
}

export default Jack;