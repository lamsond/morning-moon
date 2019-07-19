import React from 'react';
import topStyles from './top.module.css';
import { Link } from 'gatsby';

export default () => {

    return (
        <div className={topStyles.top}>
            <ul  className={topStyles.list}>
            <li><h5><Link to='/'>main</Link></h5></li>
                <li><h5><Link to='/courses/'>courses</Link></h5></li>
                <li><h5><Link to='/showcase/'>showcase</Link></h5></li>
                <li><h5><Link to='/blog/'>blog</Link></h5></li>
                <li><h5><Link to='/about/'>about</Link></h5></li>
            </ul>
        </div>
    );
}