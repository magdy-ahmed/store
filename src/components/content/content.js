import React from "react"

import BiggestOffer from './biggest_offer'
import Collections from './collections';
import Collections2 from './collections2';

function Content(){
    return(
        
            <div class="content-top">
                 <BiggestOffer title1="THE BIGGEST" title2="SALE OF THE day" off="70" link="" category="Women"/>
          
                 <div class="banner-box-adv">
                    <Collections/>
                    <Collections2/>
  
          
                </div>
            </div>
    
    )
}
export default Content