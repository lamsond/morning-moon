import React from 'react';
import Top from './top.js';

export default ({ children }) => (
    <div>
        <Top></Top>
        <div>
            { children }
        </div>
    </div>
);