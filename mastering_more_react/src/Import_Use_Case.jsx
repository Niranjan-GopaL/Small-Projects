import React from "react";

const UseCase = (props) => (
    <div>
        <h1>Hello World</h1>

        {/* WHATEVER HTML needs to be written inside the UseCase */}
        {/* All those divs are rendered here*/}
        {props.children}
    </div>
)


export default UseCase;