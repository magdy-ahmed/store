import React from 'react'
function Search(){
return(
    <div className="top-search">
        <div className="search-cat">
            <a className="box-cat-toggle"></a>
            <div className="wrap-scrollbar" style={{display: "none"}}>
				<div className="slimScrollDiv" style={{position: "relative", "overflow": "hidden", width: "200px", height: "200px"}}>
					<div className="scrollbar" style={{"overflow": "hidden", width: "200px" ,height: "200px"}}>
                        <ul>
                            <li className="level-0"><a href="">All Categories</a></li>
                            <li className="level-1"><a href="">Default Category</a></li>
                            <li className="level-2"><a href="">Beauty &amp; Perfumes</a></li>
                            <li className="level-2"><a href="">Collection</a></li>
                            <li className="level-2"><a href="">Hugpo Dinp</a></li>
                            <li className="level-2"><a href="">Hat &amp; Cavar</a></li>
                            <li className="level-2"><a href="">Danlien Polosa</a></li>
                            <li className="level-2"><a href="">Chemise SLimFit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="search-form">
            <form method="get">
                <input type="text" name="s" defaultValue="Search..."   />
                <input type="submit" value="" />
            </form>
        </div>
    </div>
);
}
export default Search