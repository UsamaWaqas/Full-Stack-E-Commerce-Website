import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import payment from "../../assets/payments.png"
const Footer = () => {
    return (<div className="footer">
        <div className="footer-content">
           
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere pariatur facilis, dolore quo deserunt praesentium temporibus labore iste expedita.</div>
            </div>
            <div className="col">
                <div className="title">
                    contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">word no 3 chowk azam district layyah </div>

                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">Phone : +923045354948</div>
                        
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">Email: usamawaqas.m@gmail.com </div>
                        
                    </div>
                </div>
            <div className="col">
                <div className= "title">categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart watches</span>
                <span className="text">Bluetooth speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home theatre</span>
                <span className="text">Projectors</span>

            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">privacy policy</span>
                <span className="text">Returns</span>
                <span className="text">terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                USAMA@STORE 2023 CREATED BY USAMA WAQAS. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={payment} alt="" />
            </div>
        </div>
    </div>);
};

export default Footer;
