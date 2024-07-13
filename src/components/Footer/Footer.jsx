import "./Footer.scss"
import instagram_icon from "../../Assets/instagram_icon.png"
// import pintester_icon from "../../Assets/pintester_icon.png"
import whatsapp_icon from "../../Assets/whatsapp_icon.png"

import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <Link to={'/'}>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <h2>تسوق</h2>
                </div>
            </Link>

            <ul className="nav-menu">
                <li>الصفحة الرئسية</li>
                <li>بلايز</li>
                <li>قبعات</li>
            </ul>

            <div className="icons">
                <img src={instagram_icon} alt="" />
                {/* <img src={pintester_icon} alt="" /> */}
                <a href="https://wa.me/966549009070" target="_blank"><img src={whatsapp_icon} alt="" /></a>
            </div>

            <div className="footer-copyright">
                <p>Copyright @ 2024 - All Right Reserved | <span><a href="https://serajs-net.web.app" target="_blank">SERAJS-NET.COM</a></span></p>
            </div>
        </div>
    )
}