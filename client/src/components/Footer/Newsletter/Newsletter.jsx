import "./Newsletter.scss";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa"
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="smalltext">News letter</span>
            <span className="big-text">Sign up for latest update and offers</span>
            <div className="form">
                <input type="text" placeholder="email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">will be used in accordance with our privacy policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
