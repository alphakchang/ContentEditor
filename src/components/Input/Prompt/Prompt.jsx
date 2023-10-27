import React from 'react';
import './Prompt.css';
import { BodyText } from 'react-bootstrap-icons';

const Prompt = ({ onPromptChange }) => {
    return (
        <div className="col-12 my-1">
            <div className="row my-2">
                <div>
                    <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary"><BodyText /> Prompt</label>
                </div>
            </div>
            <div className="row my-2">
                <div className="promptArea">
                    <textarea className="form-control px-3" id="sourceText" onChange={onPromptChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Prompt;