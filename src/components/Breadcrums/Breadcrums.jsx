import breadcrum_arrow from "../../Assets/breadcrum_arrow.png"
import "./Breadcrums.scss"

export default function Breadcrums(props) {
    const { product } = props

    return (
        <div className="breadcrums">
            الصفحة الرئسية <img src={breadcrum_arrow} alt="" /> المنتجات <img src={breadcrum_arrow} alt="" /> {product.category === "men" ? "بلايز" : "قبعات"}
            <img src={breadcrum_arrow} alt="" /> <span>{product.name}</span>
        </div>
    )
}