import React from 'react'
function Content (){
    return(
        <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="item-our-blog">
            <div className="our-blog-thumb">
                <a href="/">
                    <img src="packages/images/home_1/blog/blog1.png" alt="" />
                </a>
            </div>
            <div className="our-blog-info">
                <div className="inner-our-blog-info">
                    <span>Jun 23 2014</span>
                    <h3><a href="/">Cupidatat none proident amet</a></h3>
                    <span>9 Comments</span>
                    <div className="post-extra-link">
                        <a href="/"><img src="packages/images/home_1/icon-search.png" alt="" /></a>
                        <a href="/"><i className="fa fa-link"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Content