import React ,{Component} from 'react'
import Content from './content'
class Contents extends Component{
    constructor(){
        super()
        this.state={
            contents:[]
        }
    }
    render(){
        
        return(
            <div class="row">
                <Content/>
                <Content/>
                <Content/>
                <Content/>

            </div>
        );
    }
}
export default Contents