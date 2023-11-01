import React from 'react';
import SendPromptButton from '../../components/SendPromptButton/SendPromptButton';
import JackApiCall from './JackApiCall';

const JackOutput = ({ proxy, title, tone, keywords }) => {

    const apiCall = React.createRef();

    return(
        <div>
            <div className="row my-3">
                <div className="d-flex justify-content-center">
                    <SendPromptButton buttonName="Write Article"
                        onClick={() => {
                            apiCall.current.runFTCall();
                        }}
                    />
                </div>
            </div>

            <div className="row my-3">
                <div className="d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                        <span className="border rounded border-light p-1">Fine-tuned GPT - Balsam Articles</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                        <JackApiCall ref={apiCall} proxy={proxy} title={title} tone={tone} keywords={keywords} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JackOutput;