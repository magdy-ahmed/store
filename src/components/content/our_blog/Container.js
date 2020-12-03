import React ,{Component} from 'react'
import Header from './header'
import Contents from './contents'
class Container extends Component{
    constructor(){
        super()
        this.state={
            header:{}
        }
    }
    render(){
        return(
            <div class="from-our-blog">
			    <div class="container">
                    <Header/>
                    <Contents/>
                </div>
            </div>
        );
    }
}
export default Container