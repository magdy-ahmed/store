import React from "react"
function Brand (props){
    return(
        <a href={props.brand.link}><img src={props.brand.image_link} alt=""/></a>

    );

}
export default Brand