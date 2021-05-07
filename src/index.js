import React from "react"; 
import {Button} from "@material-ui/core"

class SimpleButton extends React.Component
{
    render()
    {
        return (
            <button>simple button</button>
        ); 
    }
}

// window.SimpleButton = SimpleButton; 
window.SimpleButton = Button; 