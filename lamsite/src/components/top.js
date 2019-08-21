import React from 'react';
import { Link } from 'gatsby';

import topStyles from './top.module.css';

export default () => {

    return (
        <div className={topStyles.top}>
            <ul  className={topStyles.list}>
            <li><h5><Link to='/'><span className={topStyles.logo}>&#x0394;&#x03bb;</span></Link></h5></li>
                <li><h5><Link to='/courses/'>courses</Link></h5></li>
                <li><h5><Link to='/blog/'>blog</Link></h5></li>
                <li><h5><Link to='/about/'>about</Link></h5></li>
            </ul>
        </div>
    );
}