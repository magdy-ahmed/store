import React from "react"
function TitleBox(){
    return(
        <div className="title-box-default">
        <a href="/" className="prev-new-arrival"><i className="fa fa-arrow-circle-left"></i></a>
        <span className="title-tab">New Arrivals</span>
        <a href="/" className="next-new-arrival"><i className="fa fa-arrow-circle-right"></i></a>
    </div>
    );
}
export default TitleBox
