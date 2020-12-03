import React ,{Component} from 'react'
import Brand from "./brand"
class Brand_items extends Component{
    constructor(){
        super()
        this.state={
            brands:[{
                id:1,
                image_link:"image_link",
                link:"link"
            },{
                id:2,
                image_link:"image_link",
                link:"link"
            }]
        }
    }
    render(){
        const Brand_items = this.state.brands.map(brand=><Brand  key ={ brand.id } brand ={ brand}/>)
        return(
            <div className="col-md-3 col-sm-3 col-xs-12">
                <div className="mega-menu-slider-brand">
                    <h2>Style-Brands</h2>
                    <div className="wrap-item">
                            <div className="item">
                              <div className="inner-brand">
                                    {Brand_items}
                              </div>
                            </div>
                            <div className="item">
                                <div className="inner-brand">
                                    {Brand_items}
                                </div>
                            </div>
                            <div className="item">
                                <div className="inner-brand">
                                    {Brand_items}
                                </div>
                            </div>
                    </div>
					<div className="owl-direct-nav">
                        <a className="prev" href="#"><i className="fa fa-arrow-circle-left"></i></a>
                        <a className="next" href="#"><i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        );
    }
} 
export default Brand_items