import React from 'react';
import { Link } from 'gatsby';
import lessonNuggetStyles from './lessonNugget.module.css';

export default (props) => {
    return (
        <div>
            <h5>{ props.date } - <span>{ props.subject }</span></h5>
            <h2>{ props.title }</h2>
            <p>
                { props.text }
            </p>
            <h5><Link to='/' className={ lessonNuggetStyles.read }>Read</Link></h5>
            <hr />
        </div>
    );
} 