import Whatsapp from "../Assets/WhatsApp.svg.png"
import Call from "../Assets/call.png"
import "./css/Contact.scss"

const Contact = () => {
  return (
    <div className="contact">

      <a href="tel:966549009070" target="_blank" className="number"><h1>+966 54 900 90 70</h1></a>

      <div className="box">
        <h1>تواصل معنا الآن عن طريق الوتس اب</h1>
        <a href="https://wa.me/966549009070" target="_blank"><img src={Whatsapp} alt="" /></a>
      </div>

      <div className="box">
        <h1>تواصل معنا الآن اتصل بنا</h1>
        <a href="tel:966549009070" target="_blank"><img src={Call} alt="" /></a>
      </div>
    </div>
  )
}

export default Contact