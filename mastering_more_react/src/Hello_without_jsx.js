import React from "react";


const Hello_wihtout_jsx = ({prop_name}) => (
    /*
                how we creata a react component without jsx
    
    --> first  param :  html tag
    --> second param :  json of all the attributes with its values
    --> third  param :  what to render inside the tag {text objects, children elements}
    
    */
   // React.createElement('div', null, `Hello_wihtout_jsx ${prop_name}`)

    // how children elements are created.
    React.createElement('div', {id:"Wrapper_inner",className:"Wrapper"}, 
        React.createElement('span', null, `Hello_wihtout_jsx ${prop_name}`)
        )
)
export default Hello_wihtout_jsx;