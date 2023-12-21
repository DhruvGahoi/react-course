import { useState } from 'react'

import './App.css'

function App() {

  const[counter, setCounter] = useState(0)

  const addValue = () => {

    //React doesn't send the values immediately after you perform a state
    //it actually bundles things...this is known as batching
    //If you want to avoid batching you can use a CB method (()=>{}) now you automatically gets the access to the previous counter
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  // let counter = 0

  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log(counter)
  // }

  // const removeValue = () => {
  //   counter = counter - 1;
  //   console.log(counter)
  // }

  return (
    <>
      <h1>React Course </h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      {/* <p>Footer: {counter} </p> */}
    </>
  )
}

export default App
