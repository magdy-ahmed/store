import React from 'react'
function ConectUs(props){
    return(
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-6 col-xs-12">
                        <div class="logo-footer"><a href={props.image.link}><img src={props.image.src} alt="" /></a></div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="copy-right">
                            <p>© 2015        <a href="#" class="privacy-policy">Privacy Policy</a></p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="contact-footer">
                            <p>My Company , Glasgow D04 89GR<br/>Call us now: 800-2345-6789</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="social-footer">
                            <a href={props.social.facebook}><i class="fa fa-facebook"></i></a>
                            <a href={props.social.twitter}><i class="fa fa-twitter"></i></a>
                            <a href={props.social.linkedin}><i class="fa fa-linkedin"></i></a>
                            <a href={props.social.googleplus}><i class="fa fa-google-plus"></i></a>
                            <a href={props.social.rss}><i class="fa fa-rss"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConectUs