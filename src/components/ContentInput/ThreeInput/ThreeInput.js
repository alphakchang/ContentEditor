import React from 'react';
import './ThreeInput.css';
import { Icon1CircleFill, Icon2CircleFill, Icon3CircleFill } from 'react-bootstrap-icons';

const ContentInput = ({ onInputChange1, onInputChange2, onInputChange3 }) => {
    return (
        <div className='row'>
            <div className="col-4 my-1">
                <div className="row my-2">
                    <div>
                        <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary">Text <Icon1CircleFill /></label>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="inputArea">
                        <textarea className="form-control px-3" id="sourceText" onChange={onInputChange1}></textarea>
                    </div>
                </div>
            </div>

            <div className="col-4 my-1">
                <div className="row my-2">
                    <div>
                        <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary">Text <Icon2CircleFill /></label>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="inputArea">
                        <textarea className="form-control px-3" id="sourceText" onChange={onInputChange2}></textarea>
                    </div>
                </div>
            </div>

            <div className="col-4 my-1">
                <div className="row my-2">
                    <div>
                        <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary">Text <Icon3CircleFill /></label>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="inputArea">
                        <textarea className="form-control px-3" id="sourceText" onChange={onInputChange3}></textarea>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContentInput;