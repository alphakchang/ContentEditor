import React from 'react';
import './Tone.css';
import { ChatText } from 'react-bootstrap-icons';

const Tone = ({ onToneChange }) => {
    return (
        <div className="col-12 my-1">
            <div className="row my-2">
                <div>
                    <label htmlFor="toneText" className="form-label fw-bold text-body-secondary"><ChatText /> Tone</label>
                </div>
            </div>
            <div className="row my-2">
                <div className="toneArea">
                    <textarea className="form-control px-3" id="toneText" onChange={onToneChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Tone;