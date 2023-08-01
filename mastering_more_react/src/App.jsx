import { useState } from 'react'
import './App.css'
import Component from './Props'

function App() {

  return (
    <>
        <Component 
            name="Name_1" 
            alias="ALias_1" 
            note="YOU CAN PASS ANYTHING any no of times"
            note2="YOU CAN PASS ANYTHING any no of times"
        />

        <Component 
            name="Name_2" 
            alias="ALias_2" 
            note="YOU CAN PASS ANYTHING any no of times"
            note2="YOU CAN PASS ANYTHING any no of times"
        />

        <Component 
            name="Name_3" 
            alias="ALias_4" 
            note="YOU CAN PASS ANYTHING any no of times"
            note2="YOU CAN PASS ANYTHING any no of times"
        />



    </>
  )
}

export default App
