import React from "react"

export default props => {
    return <ul>
        {props.gifList.map(createGif)}
    </ul>
}

function createGif(gif){
    return <li><img src={gif.image} /></li>
}
