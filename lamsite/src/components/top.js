import React from 'react';
import topStyles from './top.module.css';

export default () => {

    return (
        <div className={topStyles.top}>
            <ul  className={topStyles.list}>
                <li><h5><a href='/'>courses</a></h5></li>
                <li><h5><a href='/'>showcase</a></h5></li>
                <li><h5><a href='/'>blog</a></h5></li>
                <li><h5><a href='/'>about</a></h5></li>
            </ul>
        </div>
    );
}