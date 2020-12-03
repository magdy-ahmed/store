import React , {Component} from "react"
import Inner_item from "./item"
class Wrap_products extends Component{
  constructor(){
      super()
      this.state={
            items:[{   
                 id:1,  
                 price:'$45.99',
                 prev_price:'$87,38',
                 link_image:"/packages/images/product_home1/1.jpg",
      
            },{
                 id:2,
                 price:'$35.99',
                 prev_price:'$87,38',
                 link_image:"/packages/images/product_home1/2.jpg",
      
      
             },{ 
                 id:3,        
                 price:'$45.99',
                 prev_price:'$87,38',
                 link_image:"/packages/images/product_home1/3.jpg",
      
            },{
                 id:4,
                 price:'$45.99',
                 prev_price:'$87,38',
                 link_image:"/packages/images/product_home1/4.jpg",
      
      }
         ]
      }
  }
    render(){
        const items = this.state.items.map(item=><Inner_item key={item.id} item={item}/>)
  
        return(
            
            <li className="has-mega-menu">
            <a href="#">Corssbody</a>
                            <ul className="sub-menu">

              <li>
              <div className="wrap-mega-menu">
                                    <div className="mega-menu-list-product">
                  <h2 className="title-mega-menu">Collection</h2>
                                              <div className="wrap-item">

                       
                    {items}



                    </div>
                
                <div className="owl-direct-nav">
                                            <a className="prev" href="#"><i className="fa fa-arrow-circle-left"></i></a>
                                            <a className="next" href="#"><i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                    
                                    <div className="mega-menu-simple-banner text-inner">
                                        <div className="mega-menu-simple-thumb">
                                            <a href="#"><img src="images/home_1/mega-menu-banner.png" alt="" /></a>
                                        </div>
                                        <div className="mega-menu-simple-text">
                                            <p className="simple-text1">big sale on canifa shop</p>
                                            <p className="simple-text2">up to<br/>80% off</p>
                                        </div>
                                    </div>
                                    
                                </div>
          
                            </li>
                        </ul>
                    </li>
         
        );
  }  
} 
export default Wrap_products