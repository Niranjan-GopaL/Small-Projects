import { Component } from 'react'
import './App.css'
import MyComponent_Greet from './Greet'
import Welcome from './Welcome'


class App extends Component {

  render() {
    return (
        <div >
            <MyComponent_Greet name='Ninja' />
            <Welcome />
        </div>
    )

  }
} 


export default App