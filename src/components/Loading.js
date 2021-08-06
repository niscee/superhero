import React from 'react';
import { FaSpinner } from "react-icons/fa";
import './css/loading.css';

const Loading = () => {
    
    const loadStyle = {
        width: "10%",
        margin: "auto",
    }

    const iconStyle = {
        fontSize: "5rem",
        textAlign: "center",
        color: "white",
    }

    return (
        <div style={loadStyle}>
            <FaSpinner icon="spinner" style={iconStyle} className="spinner" /> 
        </div>
    )
}

export default Loading
