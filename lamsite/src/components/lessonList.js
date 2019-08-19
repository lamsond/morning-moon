import React from 'react';
import { Link } from 'gatsby';

import lessonListStyle from './lessonList.module.css';

export default (props) => {
    return (
        <li><Link to={props.slug} className={lessonListStyle.main}>{props.title}</Link></li>
    );
}