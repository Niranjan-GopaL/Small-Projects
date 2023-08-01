import { useState } from 'react'
import './App.css'
import Component from './Props'
import UseCase from './Import_Use_Case'

function App() {

  return (
    <>
        {/* THE COMPONENT has unknow html stuff to be rendered inside component */}
        <UseCase>

            <div>
                USEFUL FOR DYNAMICALLY RENDERING INSIDE A COMPONENT
                <div>
                    NO IDEA WHAT SHOULD BE RENDRED
                </div>
            </div>

        </UseCase>
    </>
  )
}

export default App
