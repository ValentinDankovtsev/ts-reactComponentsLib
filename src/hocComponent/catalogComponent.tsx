import React, { FormEvent } from "react";


export class CatalogComponent extends React.Component {


    onChange=(ev:FormEvent)=>{
        console.log(ev.target)
    }

    render ():React.ReactElement {
        return (
            <div onChange={this.onChange}>
<p>
    <input type='button' value='header' name='component'></input>
</p>
<p>
    <input type='button' value='paragraph' name='component'></input>
</p>
            </div>
        )
    }
}