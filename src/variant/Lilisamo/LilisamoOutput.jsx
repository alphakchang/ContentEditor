import React from 'react';
import SendPromptButton from '../../components/SendPromptButton/SendPromptButton';
import { Icon4Circle } from 'react-bootstrap-icons'
import LilisamoApiCall from './LilisamoApiCall';

const LilisamoOutput = ({ proxy, prompt, source }) => {

    const apiCall0 = React.createRef();
    const apiCall1 = React.createRef();

    return(
        <div>
            <div className="row my-3">
                <SendPromptButton buttonName="Run Double Inference"
                    onClick={() => {
                        apiCall0.current.runGPT4Call();
                        apiCall1.current.runFTCall();
                    }}
                />
            </div>

            <div className="row my-3">
                <div className="col-6">
                    <span className="border rounded border-light p-1">GPT<Icon4Circle /></span>
                </div>
                <div className="col-6">
                    <span className="border rounded border-light p-1">Fine-tuned GPT</span>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <LilisamoApiCall ref={apiCall0} proxy={proxy} prompt={prompt} source={source}/>
                </div>
                <div className="col-6">
                    <LilisamoApiCall ref={apiCall1} proxy={proxy} prompt={prompt} source={source}/>
                </div>
            </div>
        </div>
    );
}

export default LilisamoOutput;