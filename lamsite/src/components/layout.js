import React from 'react';
import Top from './top.js';
import layoutStyles from './layout.module.css';

export default ({ children }) => (
    <div>
        <Top />
        <div className={layoutStyles.main}>
            { children }
        </div>
    </div>
);