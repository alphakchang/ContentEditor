import React from 'react';
import './Keywords.css';
import { Key } from 'react-bootstrap-icons';

const Keywords = ({ onKeywordsChange }) => {
    return (
        <div className="col-12 my-1">
            <div className="row my-2">
                <div>
                    <label htmlFor="keywordsText" className="form-label fw-bold text-body-secondary"><Key /> Keywords</label>
                </div>
            </div>
            <div className="row my-2">
                <div className="keywordsArea">
                    <textarea className="form-control px-3" id="keywordsText" onChange={onKeywordsChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Keywords;