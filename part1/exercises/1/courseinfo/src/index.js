import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Header Component
 */
    const Header = (props) => {
        return(
            <div>
                <h1>{props.course}</h1>
            </div>
        )
    }   

 /**
  * Content
  */
    const Content = (props) => {
        return (
            <div>
              <Part part={props.courseName1} exercise={props.courseExercise1}/>
              <Part part={props.courseName2} exercise={props.courseExercise2}/>
              <Part part={props.courseName3} exercise={props.courseExercise3}/>
            </div>
        )
    }
  /**
   * Total
   */

   const Total = (props) => {
       return (
           <div>
               <p>Number of exercises {props.exercises}</p>
           </div>
       )
   }

   const Part = (props) => {
       return (
           <div>
             <p>{props.part} {props.exercise}</p>
           </div>
       )
   }

  const App =  () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
      return(
          <div>
              <Header course={course} />
              <Content 
              courseName1={part1} courseExercise1={exercises1}
              courseName2={part2} courseExercise2={exercises2}
              courseName3={part3} courseExercise3={exercises3} />
              <Total exercises= {exercises1+exercises2+exercises3} />
          </div>
      )
  }

ReactDOM.render(<App />, document.getElementById('root'));