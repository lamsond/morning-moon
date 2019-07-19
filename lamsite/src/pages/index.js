import React from "react"
import Layout from "../components/layout.js";
import LessonNugget from '../components/lessonNugget.js';

export default () => (
<Layout>
    <h1>Lessons</h1>
    <LessonNugget date='Sept 3, 2019' subject='Algebra 1' title='Graphing Parabolas' 
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
    />
    <LessonNugget date='Sept 3, 2019' subject='AP Computer Science Principles' title='HTML tags' 
        text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.' 
    />
    <LessonNugget date='Sept 3, 2019' subject='AP Computer Science A' title='Variables' 
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
    />
</Layout>
);
