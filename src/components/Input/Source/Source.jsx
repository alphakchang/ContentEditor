import React from 'react';
import './Source.css';
import { TextareaT } from 'react-bootstrap-icons';

const Source = ({ onSourceChange }) => {
    return (
        <div className="col-12 my-1">
            <div className="row my-2">
                <div>
                    <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary"><TextareaT /> Source</label>
                </div>
            </div>
            <div className="row my-2">
                <div className="sourceArea">
                    <textarea className="form-control px-3" id="sourceText" onChange={onSourceChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Source;