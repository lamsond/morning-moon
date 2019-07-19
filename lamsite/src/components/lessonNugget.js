import React from 'react';
import { Link } from 'gatsby';

export default () => {
    return (
        <div>
            <h5>Sept 3, 2019 <span>Algebra 1</span></h5>
            <h2>Solving Quadratic Equations</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
            </p>
            <h5><Link to='/'>Read</Link></h5>
        </div>
    );
}