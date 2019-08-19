import React from 'react';
import { Link } from 'gatsby';

export default (props) => {
    return (
        <li><Link to={props.slug}>{props.title}</Link></li>
    );
}