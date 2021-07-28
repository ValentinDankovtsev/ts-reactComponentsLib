import React from "react";

export function higherOrderComponent(element:React.ComponentClass, newProps:unknown):React.ComponentClass {

    class NewElement extends element {

static defaultProps=newProps
    }
return NewElement
}