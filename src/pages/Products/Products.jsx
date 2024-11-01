import React from 'react'
// import porductImg from "../../assets/image/service/product.jpeg"
import { productData } from "../../services/static/productData"
import "./Products.css"
import "../../assets/css/media-query.css"
import Headers from '../../Common/Header/Headers'
import Footer from '../../Common/Footer/Footer'
const Products = () => {
    console.log(productData[0].Website)



    return (
        <>
            <Headers />
            <div id='porduct-page'>
                <div className="container">
                    <div className="title">
                        <h3>package</h3>
                    </div>
                    <div className="package_box">
                        <div className="product_wrapper">
                            {
                                productData.map((item) => (
                                    <>
                                        <div className="porduct_item">
                                            <img src={porductImg} className='img-fluid' style={{ height: '150px' }} alt="lenex it product" title='lenexit' />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum pariatur, facilis ducimus fugiat dignissimos </p>
                                            <button className='btn'>Order Now</button>
                                        </div>
                                    </>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products