
import React from 'react'
function Inner_Item(props){
    return( 
        <div className="item">
              <div className="inner-item">
                    <div className="mega-slide-thumb">
                        <a href="#"><img src={props.item.link_image} alt="" /></a>
                    </div>
                    <div className="mega-slide-text">
                        <span>{props.item.price}</span>
                        <del>{props.item.prev_price}</del>
                    </div>
               </div>
        </div>
    );
}
export default Inner_Item
