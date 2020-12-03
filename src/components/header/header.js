import React , {Component} from 'react'

import Logo from './logo'

import Search from "./search"
import Info from "./info"

import List_inline from './list_inline';
class Header extends Component{
  constructor() {
    super()
    this.state = {
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
render() {
  return (
    <header id="header" className="header-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                  <Logo
                  link ="packages/images/home_1/logo.png"
                  />
              </div>
              <div className="col-sm-8 col-xs-12">
                <Search/>
                  
              </div>
              </div>
              <div className="top-nav">
				        <div className="row">
                  <div className="col-md-10 col-sm-12 col-xs-6">
						        <nav className="main-nav">
                      <List_inline />
                    </nav>
                   
                  </div>

                  <Info/>






                  
                </div>

              </div>
           
            
          </div>
        </header>
  )
}
}
export default Header