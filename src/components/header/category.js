import React from "react"
function Category(props){
    return(
    <li><a href={props.category.link}>{props.category.name}</a></li>
    );
}
export default Category
