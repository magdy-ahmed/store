import React from "react"
function Biggest_offer(props){
    return(
        <div className="container">
        <div className="banner-simple-text"></div>
    <h2>{props.title1}</h2>
    <h3>{props.title2}</h3>
              <div class="text-special">
                  <strong>{props.off}</strong>
                  <span>%<br/>OFF</span>
                  <label>save up to</label>
                  <a href={props.link}>{props.category}</a>
              </div>
          </div>
    )
}
export default Biggest_offer