import "./Hero.scss"
// import hero_img from '../../Assets/tshirt/17.png'
import hero_img from '../../Assets/ban.png'
import arrow_icon from '../../Assets/arrow.png'
import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigate = useNavigate()

    return (
        <div className="hero">
            <div className="hero-right">
                <img src={hero_img} alt="" height={'600px'} className="hero-img" />
            </div>

            <div className="hero-left">
                <p>الوافدون الجدد فقط</p>
                <h1>
                    مجموعات<br />
                    جديدة<br />
                    للجميع
                </h1>

                <button onClick={() => navigate("/men")}>المجموعة الأحدث<img src={arrow_icon} alt="" /></button>
            </div>
        </div>
    )
}