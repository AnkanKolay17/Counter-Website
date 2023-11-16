import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(20)


  // let counter=20
  const addValue=()=>{
    // console.log('value added',Math.random())
    console.log("clicked",counter)
    //counter=counter+1
    if(counter<20){
      setCounter(counter+1)
    }else{
      alert("More than 20 is not allowed")
    }
  }
  const removeValue=()=>{
    console.log("clicked",counter)
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("Negetive Value not allowed")
    }
  }
  const resetValue=()=>{
    setCounter(counter=0)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value{counter}</button><br />
      <button onClick={removeValue}>remove value{counter}</button><br />
      <button onClick={resetValue}>reset counter {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
