import React from 'react';
import './Title.css';
import { TextareaT } from 'react-bootstrap-icons';

const Title = ({ onTitleChange }) => {
    return (
        <div className="col-12 my-1">
            <div className="row my-2">
                <div>
                    <label htmlFor="titleText" className="form-label fw-bold text-body-secondary"><TextareaT /> Title</label>
                </div>
            </div>
            <div className="row my-2">
                <div className="titleArea">
                    <textarea className="form-control px-3" id="titleText" onChange={onTitleChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Title;