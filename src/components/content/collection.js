import React from "react"
function Collection(props){
    return(

<div class="col-md-6 col-sm-6 col-xs-12">
    <div class="inner-box-banner-adv odd bottom-right">
        <a href={props.collection.link} class="banner-adv-thumb-link"><img src={props.collection.image_link} alt="" />
        <div class="text-adv-intro">
        <h2>{props.collection.title}</h2>
            <h2>{props.collection.title1}</h2>
            <h3>{props.collection.title2}</h3>
        </div></a>
        {/* <div class="box-search-adv">
            
        </div> */}
        <a href={props.search_link} class="box-search-adv-link"><i class="fa fa-search"></i></a>
        <div class="text-adv-hidden">
    <p>{props.title}</p>
        </div>
    </div>
</div>
    );    
}
export default Collection