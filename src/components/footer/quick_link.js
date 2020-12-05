import React from 'react'
function QuickLink(props){
    return(
        <a href={props.link.link}>{props.link.name}</a>     
    );
}
export default QuickLink