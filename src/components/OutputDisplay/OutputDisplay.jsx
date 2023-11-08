import React from 'react';
import SendPromptButton from '../SendPromptButton/SendPromptButton';
import ApiCall from '../ApiCall/ApiCall';


const instructions = [
    "detect the language, proofread for grammar and spelling errors",
    "detect the language, then rewrite professionally in the same language",
    "detect the language, then rewrite to make it sound friendly in the same language",
    "detect the language, then write a concise summary in the same language"
];


const OutputDisplay = ({ proxy, content }) => {
    
    const apiCallRef0 = React.createRef();
    const apiCallRef1 = React.createRef();
    const apiCallRef2 = React.createRef();
    const apiCallRef3 = React.createRef();

    return(
        <div>
            {/* row 1 - buttons*/}
            <div className="row text-center">
                <div className="col-3 p-3">
                    <SendPromptButton buttonName="Proofread" onClick={() => apiCallRef0.current.runCall()} />
                </div>
                <div className="col-3 p-3">
                    <SendPromptButton buttonName="Professional" onClick={() => apiCallRef1.current.runCall()} />
                </div>
                <div className="col-3 p-3">
                    <SendPromptButton buttonName="Friendly" onClick={() => apiCallRef2.current.runCall()} />
                </div>
                <div className="col-3 p-3">
                    <SendPromptButton buttonName="Summary" onClick={() => apiCallRef3.current.runCall()} />
                </div>
            </div>

            {/* row 2 - outputs*/}
            <div className="row">
                <div className="col-3 p-3">
                    <ApiCall ref={apiCallRef0} proxy={proxy} content={content} prompt={instructions[0]}/>
                </div>
                <div className="col-3 p-3">
                    <ApiCall ref={apiCallRef1} proxy={proxy} content={content} prompt={instructions[1]}/>
                </div>
                <div className="col-3 p-3">
                    <ApiCall ref={apiCallRef2} proxy={proxy} content={content} prompt={instructions[2]}/>
                </div>
                <div className="col-3 p-3">
                    <ApiCall ref={apiCallRef3} proxy={proxy} content={content} prompt={instructions[3]}/>
                </div>
            </div>
        </div>
    );
}

export default OutputDisplay;