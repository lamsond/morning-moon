import React from 'react';
import topStyles from './top.module.css';

export default () => {

    return (
        <div className={topStyles.top}>
            <ul  className={topStyles.list}>
                <li><h2><a href='/'>lamsite</a></h2></li>
                <li><h2><a href='/'>courses</a></h2></li>
                <li><h2><a href='/'>showcase</a></h2></li>
                <li><h2><a href='/'>blog</a></h2></li>
                <li><h2><a href='/'>about</a></h2></li>
            </ul>
        </div>
    );
}