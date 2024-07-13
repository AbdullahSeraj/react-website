import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"
import Breadcrums from "../components/Breadcrums/Breadcrums";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"

import "./css/Product.scss"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

export default function CategoryDetails() {
    const { id } = useParams()

    const { all_product } = useContext(ShopContext);
    const product = all_product.find(item => item.id == id);
    const productsCat = all_product.filter(item => item.category === product.category)

    const { addToCart } = useContext(ShopContext)

    return (
        <div className="product-page">
            <Breadcrums product={product} />

            <div className="product">
                <div className="left-product">
                    {/* <div className="left-item">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div> */}

                    <div className="right-item">
                        <img src={product.image} alt="" />
                    </div>
                </div>

                <div className="right-product">
                    <h2>{product.name}</h2>

                    <div className="stars">
                        <div className="imgs">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                        </div>
                        <span>(122)</span>
                    </div>

                    {/* <div className="price">
                        <span className="old-price">${product.old_price}</span>
                        <span className="new-price">${product.new_price}</span>
                    </div> */}

                    <p className="des">مع ملابس مطاعمنا، ستتمكن من تقديم أفضل خدمةٍ لزبائنك مع الشعور بالراحة والأناقة في نفس الوقت.
                        نستخدم أجود أنواع الأقمشة والتصاميم المُبتكرة لضمان حصولك على ملابس مطاعم تدوم طويلاً وتُحافظ على رونقها.
                        ملابس مطاعمنا مُصممة خصيصًا لتلبية احتياجات مختلف وظائف المطعم، من الطهاة إلى النوادل.
                        نقدم خدمات التخصيص والتطريز لِإضافة لمسةٍ شخصيةٍ على ملابس مطعمك.
                        مع ملابس مطاعمنا، ستُصبح هوية مطعمك مميزةً لا تُنسى وتُعكس التزامك بالجودة.
                        نؤمن بأنّ الاستثمار في ملابس مطاعم عالية الجودة هو استثمارٌ مُربحٌ على المدى الطويل.
                        تواصل معنا اليوم لمعرفة المزيد عن ملابس مطاعمنا وكيف يمكننا مساعدتك في تحقيق أهدافك.
                    </p>

                    <h3 className="select">أختر الحجم</h3>

                    <div className="sizes">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>

                    <button onClick={() => addToCart(product.id)}>اضف الى العربة</button>

                    <p className="category"><strong>النوع:</strong> {product.category === "men" ? "بلايز" : "قبعات"}</p>
                    {/* <p className="tags"><strong>Tags:</strong> Modern, Latert</p> */}
                </div>
            </div>

            {/* <div className="description">
                <div className="spans">
                    <span>Description</span>
                    <span className="reviews">Reviews (122)</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis tenetur esse laboriosam exercitationem commodi, tempore itaque, asperiores doloremque neque est possimus sit dolore sunt fugiat nesciunt, perferendis id. Consequatur.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At culpa consequuntur ullam? Minima, in ad. Iusto labore laborum eos vitae sapiente officia cum earum! Reiciendis sapiente nobis asperiores iste! Adipisci!
                </p>
            </div> */}

            <RelatedProducts products={productsCat} category={product.category} />
        </div>
    )
}