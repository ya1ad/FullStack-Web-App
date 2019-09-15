import React, {useState} from 'react'
import ReactDOM from 'react-dom'


  const Display = ({counter}) => <div>{counter}</div>
  const App = (props) => {
    
    const  [counter, setcounter] = useState(0)
    const setToValue = (value) => setcounter(value)
    
    const Button = ({onClick, text}) => (<button onClick={onClick}> {text} </button>)
    

    return (
      <div>
          <Display counter = {counter} />
            <Button onClick={()=> setToValue(counter+1)}
          text='add'/>
            <Button onClick={()=> setToValue(counter-1)}
          text='minus'/>
            <Button onClick={()=> setToValue(0)}
          text='zero'/>
      </div>  
    )
  }
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )