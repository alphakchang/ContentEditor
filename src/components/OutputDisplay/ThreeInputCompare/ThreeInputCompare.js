import React from "react";
import ApiCallIsabelle from "../../ApiCall/ApiCallIsabelle/ApiCallIsabelle";
import SendPromptButton from "../../SendPromptButton/SendPromptButton";

const instruction = "Which of the following is the best written text, and why?";

const ThreeInputCompare = ({ input1, input2, input3 }) => {
    
    const apiCall = React.createRef();

    return(
        <div>
            {/* row 1 - buttons*/}
            <div className="row">
                <div className="col-3 p-3">
                    <SendPromptButton buttonName="Best out of the three" onClick={() => apiCall.current.runCall()} />
                </div>
            </div>

            {/* row 2 - outputs*/}
            <div className="row">
                <div className="col-6 p-3">
                    <ApiCallIsabelle ref={apiCall} text1={input1} text2={input2} text3={input3} prompt={instruction}/>
                </div>
            </div>
        </div>
    );
}

export default ThreeInputCompare;