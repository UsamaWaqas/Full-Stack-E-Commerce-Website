import { useState, useContext } from 'react';
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Context } from "../../utils/AppContext";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import useFetch from '../../Hooks/useFetch';
import {useParams} from 'react-router-dom';




const SingleProduct = () => {
    const [quantity, setquantity] = useState(1);
    const { id }= useParams();
    const { handleAddToCart } = useContext(Context);
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    if(!data) return;
    const product = data.data[0].attributes

    const increament = () =>{
        setquantity(prevstate => prevstate+1 )
    }
    const decreament = () =>{
        setquantity((prevstate) => {
            if(prevstate === 1) return 1
            return prevstate - 1
        } )
    }

    
    return <div className="single-product-main-content">
            <div className="layout">
            <div className="single-product-page">
                <div className="left">
                <img src={ process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        product.img.data[0].attributes.url} alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">PKR:{product.price}</span>
                    <span className="product-description">{product.description}</span>
                    <div className="cart-buttons">
                        <div className="quantity-button">
                            <span onClick={decreament}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increament}>+</span>
                        </div>
                        <button className="add-to-cart-button" onClick={() => {
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setquantity(1);
                                }}>
                        <FaCartPlus size={20} />
                            ADD TO CART
                            </button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-bold">
                            Category: {"   "}
                            <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                       
                    </div>
                    <div className="info-item">
                        <span className="text-bold">
                            Share:
                           
                        <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} /> 
                        </span>
                        </span>
                    </div>

                </div>
            </div>
            <RelatedProducts   productId={id}
                    categoryId={product.categories.data[0].id} />

        </div>
    </div>;
  
};

export default SingleProduct;
