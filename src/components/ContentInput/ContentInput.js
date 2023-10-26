import React from 'react';
import './ContentInput.css';
import { FileText } from 'react-bootstrap-icons';

const ContentInput = ({ onInputChange }) => {
    return (
        <div className="col-12 my-1">
            <div className="row my-2">
                <div>
                    <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary"><FileText /> Content</label>
                </div>
            </div>
            <div className="row my-2">
                <div className="inputArea">
                    <textarea className="form-control px-3" id="sourceText" onChange={onInputChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default ContentInput;