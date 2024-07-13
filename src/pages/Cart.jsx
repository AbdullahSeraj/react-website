import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"

import "./css/Cart.scss"
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
    const { all_product, cartItems, addToCart, removeFromCart, getTotal } = useContext(ShopContext);
    const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="container-table">
                <table>
                    <thead>
                        <tr>
                            <th>المنتجات</th>
                            <th>اسم المنتج</th>
                            {/* <th>سعرة</th> */}
                            <th>الكمية</th>
                            {/* <th>السعر الاجمالي</th> */}
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_product.map((item, i) => {

                            if (cartItems[item.id] > 0) {
                                return <tr key={i}>
                                    <td><img src={item.image} alt="" /></td>
                                    <td><p>{item.name}</p></td>
                                    {/* <td><strong className="text-center">$ {item.new_price}</strong></td> */}
                                    <td><input className="text-center" type="text" value={cartItems[item.id]} onChange={() => item.id} /></td>
                                    {/* <td><span className="text-center">$ {item.new_price * cartItems[item.id]}</span></td> */}
                                    <td><button className="text-center" onClick={() => removeFromCart(item.id)}>X</button></td>
                                </tr>
                            }
                        })}
                    </tbody>
                </table>
            </div>

            <div className="container-cart">
                <div className="cart-totals">
                    <h2>إجمالي سلة التسوق</h2>
                    <div className="list">
                        <p>السعر الاجمالي</p>
                        {/* <span>${getTotal()}</span> */}
                        <span>$0.00</span>
                    </div>

                    <div className="list">
                        <p>الشحن</p>
                        <span>$0.00</span>
                    </div>

                    <div className="list">
                        <p>السعر الاخير</p>
                        <span>$0.00</span>
                    </div>

                    <button onClick={() => navigate("/contact")}>اشتري الآن</button>
                </div>

                {/* <div className="code">
                    <p>If you have a promo code. Enter it here</p>
                    <div className="input">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}