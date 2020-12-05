import React from "react"			
function Title_box2(){
	return(
            	<div className="title-box-default">
					<a href="/" className="prev-new-arrival"><i className="fa fa-arrow-circle-left"></i></a>
					<ul className="list-inline list-title-tab nav-tabs" role="tablist">
						<li role="presentation" className="active"><a href="/popular" aria-controls="popular" role="tab" data-toggle="tab">POPULAR</a></li>
						<li role="presentation"><a href="/seller" aria-controls="seller" role="tab" data-toggle="tab">BEST SELLERS</a></li>
						<li role="presentation"><a href="/special" aria-controls="special" role="tab" data-toggle="tab">SPECIALS</a></li>
				    </ul>
					<a href="/" className="next-new-arrival"><i className="fa fa-arrow-circle-right"></i></a>
				</div>
	);
}
export default Title_box2