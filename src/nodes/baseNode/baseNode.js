// baseNode.js

import React from "react";
import {Handle} from 'reactflow';
import './baseNode.css';

export const BaseNode = ({ title, handles, children}) => {

    return(
        <div className="node">
            <span id="title">{title}</span>
            <div id="child">
                {children}
            </div>
            <div>
                {handles.map(({ id, type, position, style}) => (
                    <Handle 
                        key={id}
                        type={type}
                        position={position}
                        id={id}
                        style={style}
                        className="custom-handle"
                    />
                ))}
            </div>
            
        </div>
    );

}
