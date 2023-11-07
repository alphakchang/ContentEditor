import React, { Component } from 'react';
import OpenAI from 'openai';

const textToHtml = (text) => {
    return text.split('\n').map((str, index, array) => (
        <React.Fragment key={index}>
            {str}
            {index === array.length - 1 ? null : <br />}
        </React.Fragment>
    ));
}

class LilisamoApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proxy: props.proxy,
            response: '',
            openai: null
        }
    }

    componentDidMount() {
        this.initializeOpenAI();
    }

    async initializeOpenAI() {
        try {
            let response = await fetch(`${this.state.proxy}/apikey`);

            if (!response.ok) {
                throw new Error('Unable to retrieve API Key');
            }

            let data = await response.json();
            let key = data.key;

            const openaiInit = new OpenAI({
                apiKey: key,
                dangerouslyAllowBrowser: true
            });

            this.setState({ openai: openaiInit });

        } catch (error) {
            console.error('Could not fetch API key', error);
        }
    }

    async ensureOpenAIInitialized() {
        if (!this.state.openai) {
            await this.initializeOpenAI();
        }

        // Check if openai is still not initialized, then throw an error.
        if (!this.state.openai) {
            throw new Error('OpenAI failed to initialize');
        }
    }

    buildFinalPrompt() {
        const finalPrompt = `Instructions: ${this.props.prompt}. Content: ${this.props.source}`;
        return finalPrompt;
    }

    async callGPT4Api() {

        await this.ensureOpenAIInitialized();

        const { openai } = this.state;

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {"role": "system", "content": "You will be translating the source into German based on instructions in the prompt."},
                {"role": "user", "content": this.buildFinalPrompt()}
            ],
            stream: true,
            temperature: 0.1
        });
    
        let responseContent = '';
        for await (const chunk of completion) {
            if (chunk.choices && chunk.choices[0].delta && chunk.choices[0].delta.content) {
                this.setState({ response: responseContent += chunk.choices[0].delta.content });
            }
        }
    }

    async callFTApi() {

        await this.ensureOpenAIInitialized();

        const { openai } = this.state;

        const completion = await openai.chat.completions.create({
            model: "ft:gpt-3.5-turbo-0613:personal::8EQYfDdM", // model fine-tuned with Lilisamo German TM
            messages: [
                {"role": "system", "content": "You are a professional translator."},
                {"role": "user", "content": this.props.source} // only looks at source right now because it is translating the prompts as well
            ],
            stream: true,
            temperature: 0.1
        });
    
        let responseContent = '';
        for await (const chunk of completion) {
            if (chunk.choices && chunk.choices[0].delta && chunk.choices[0].delta.content) {
                this.setState({ response: responseContent += chunk.choices[0].delta.content });
            }
        }
    }

    runGPT4Call() {
        this.callGPT4Api();
    }
    
    runFTCall() {
        this.callFTApi();
    }

    render() {
        return (
            <p>
                {textToHtml(this.state.response)}
            </p>
        );
    }
}

export default LilisamoApiCall;