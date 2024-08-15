import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import Data
import { CartData } from './data'

const CartArea = () => {
  return (
    <>
          <section id="cart_area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table align-middle cart_table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CartData.map((data, index)=>(
                                    <tr className="single_cart_item" key={index}>
                                    <td className="product_img">
                                        <Link to="#!">
                                            <img src={data.img} alt="product" />
                                        </Link>
                                    </td>
                                    <td className="product_name">{data.name}</td>
                                    <td className="product_price"><span className="amount">{data.price}</span></td>
                                    <td className="product_quantity">
                                        <label>Quantity :</label>
                                        <input min="1" max="100" type="number" />
                                    </td>
                                    <td className="product_subtotal"><span className="amount">{data.total}</span></td>
                                    <td className="product_remove">
                                        <Link className="remove_item" to="#!">
                                            <i className="fas fa-trash-alt"></i>
                                        </Link>
                                    </td>
                                </tr>
                                ))}
                                
                                <tr className="single_cart_item">
                                    <td colSpan="3">
                                        <form className="row g-3 coupon-form">
                                            <div className="col-auto">
                                                <input type="text" name="coupon_code"
                                                    className="input-text form-control mr-1" id="coupon_code"
                                                    placeholder="Coupon code" />
                                            </div>
                                            <div className="col-auto">
                                                <button type="submit" className="cupon_btn btn theme-btn">Apply Coupon</button>
                                            </div>
                                        </form>
                                    </td>
                                    <td colSpan="1"></td>
                                    <td colSpan="2" className="text-end">
                                        <button type="button" className="theme-btn btn-style-one"><span
                                                className="btn-title">Update Cart</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="cart_bottom_area">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="calculate_area">
                            <h5>Cart Total</h5>
                            <div className="calculate_inner">
                                <div className="cart_subtotal">
                                    <p>Subtotal</p>
                                    <p className="cart_amount">$215.00</p>
                                </div>
                                <div className="cart_subtotal ">
                                    <p>Shipping</p>
                                    <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                                </div>
                                <Link to="#!">Calculate shipping</Link>

                                <div className="cart_subtotal">
                                    <p>Total</p>
                                    <p className="cart_amount">$465.00</p>
                                </div>
                                <div className="checkout_btn">
                                    <Link to="/checkout" className="btn theme-btn">Proceed to
                                        Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CartArea