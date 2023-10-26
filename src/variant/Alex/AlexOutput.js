import React from "react";
import SendPromptButton from "../../components/SendPromptButton/SendPromptButton";
import AlexApiCall from "./AlexApiCall";

const instruction = "Delete redundant words to make the total character count falls below ";

const AlexOutput = ({ input, charLimit }) => {
    
    const apiCall = React.createRef();

    return(
        <div>
            {/* row 1 - buttons*/}
            <div className="row">
                <div className="col-3 p-3">
                    <SendPromptButton buttonName="Reduce Characters" onClick={() => apiCall.current.runCall()} />
                </div>
            </div>

            {/* row 2 - outputs*/}
            <div className="row">
                <div className="col-6 p-3">
                    <AlexApiCall ref={apiCall} text={input} limit={charLimit} prompt={instruction}/>
                </div>
            </div>
        </div>
    );
}

export default AlexOutput;