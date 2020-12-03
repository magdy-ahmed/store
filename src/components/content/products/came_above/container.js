import React ,{Component} from 'react'
import Products from './products'
import NewDesign from './new_design'
class Container extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="category-leading">
                <div className="container">
                    <NewDesign/>
                    <Products/>
                </div>
            </div>
        );
    }
}
export default Container