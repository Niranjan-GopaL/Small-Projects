import { Component } from 'react'
import './App.css'
import MyComponent_Greet from './Greet'
import Welcome from './Welcome'
import Hello_with_jsx from './Hello_with_jsx'
import Hello_without_jsx from './Hello_without_jsx'

class App extends Component {

  render() {
    return (
        <div >
            {/* <MyComponent_Greet name='Ninja' /> */}
            {/* <Welcome /> */}



            {/* THis is a jsx file */}
             <Hello_with_jsx prop_name="Nama" />
            {/* THis is a js file that uses the REact.createElement MANUALLY !!!! */}
             <Hello_without_jsx prop_name="Nama" />

        </div>
    )

  }
} 


export default App