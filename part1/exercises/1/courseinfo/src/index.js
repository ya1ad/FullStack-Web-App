import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Header Component
 */
    const Header = (props) => {
        
        return <h1>{props.course}</h1>
    }   

 /**
  * Content
  */
    const Content = (props) => {
        
        return (
            <div>
              <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
              <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
              <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>
            </div>
        )
    }
  /**
   * Total
   */

   const Total = (props) => {
       return (
           <div>
               <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
           </div>
       )
   }

   const Part = (props) => {
       return (
           <div>
             <p>{props.name} {props.exercise}</p>
           </div>
       )
   }

  const App =  () => {
    /*const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14*/
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
      return(
          <div>
              <Header course={course.name} />
              <Content parts = {course.parts} />
              <Total parts={course.parts}/>
          </div>
      )
  }

ReactDOM.render(<App />, document.getElementById('root'));