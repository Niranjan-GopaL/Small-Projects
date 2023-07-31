import { Component } from 'react'
import './App.css'
import Greet from './Greet'


class App extends Component {

  render() {
    return (
        <div >
            <Greet name='Ninja' />
        </div>
    )

  }
} 


export default App