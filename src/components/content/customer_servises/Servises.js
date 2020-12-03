import React ,{Component} from 'react'
class Servises extends Component{
    constructor(){
        super()
        this.state={
            servises:[]
        }
    
    }
    render(){
        return(
                        
            <div className="custom-services">
                <div className="container">
                    <div className="title-box-default">
                        <h2><span className="title-tab">custom services</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="item-service-box">
                                <h3>idea Design</h3>
                                <a href="/" className="item-service-link"><img src="packages/images/home_1/icon_pen.png" alt="" /></a>
                                <p>Proin dignissim commodo velit a venenatis. Pellentesque mollis faucibus posuere Casy yoleacene anritv antacus.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="item-service-box">
                                <h3>Confection</h3>
                                <a href="/" className="item-service-link"><img src="packages/images/home_1/icon_keo.png" alt="" /></a>
                                <p>Aliquam erat voltpatis aturp nteger rutrum kerdele rtanuty mu myatrsas detyuasirtase. Santac us uisque nuaderas</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="item-service-box">
                                <h3>Confection</h3>
                                <a href="/" className="item-service-link"><img src="packages/images/home_1/icon_camera.png" alt="" /></a>
                                <p>Fatis acaturp liquam eravoltp nteger rutrum kerua delertas nuty myatrsas detyuas. Santacus isque nulladeras. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}
export default Servises