import React from "react";

const Component = (props) => {

    // BEST THING ABOUT JSX :-
    // {} everything inside {} can be evaluated as a javascript code


    // console.log(props)  // <-------- PROPS IS JUST AN OBJECT

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.alias   }</h1>
        </div>
    )
}

export default Component;