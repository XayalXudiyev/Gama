import { NavLink } from "react-router-dom"
import Logo from "../footer/images/logo.png"
import BottomImg from "../footer/images/bottom image.png"
import { ReactComponent as Twitter } from "../footer/images/twitter icon_.svg"
import { ReactComponent as Instagram } from "../footer/images/instagram emoji_.svg"
import { ReactComponent as Faceebook } from "../footer/images/facebook icon_.svg"
import { ReactComponent as Youtube } from "../footer/images/youtube icon_.svg"


export const Footer = () => {
  return (

    <footer className="bg-footerColor text-base text-navColor font-semibold leading-9 p-4 pb-0  opacity-60">
      <div className="grid grid-cols-[1fr,1fr,1fr,1.7fr] pl-5 pb-2">

        <div className="flex flex-col justify-between">
          <div>
            <img src={Logo} alt="" className="w-32 m-4" />
          </div>

          <div className="social_medias flex items-center gap-x-5">
            <NavLink to='https://twitter.com/Xudiyev_21'>

              <Twitter className="bg-main rounded-full p-2 w-11 h-11" />
            </NavLink>
            <NavLink to='https://www.instagram.com/'>

              <Instagram className="bg-main rounded-full p-2 w-11 h-11" />
            </NavLink>
            <NavLink to='https://www.facebook.com/'>

              <Faceebook className="bg-main rounded-full p-2 w-11 h-11" />
            </NavLink>
            <NavLink to='youtube.com'>

              <Youtube className="bg-main rounded-full p-2 w-11 h-11" />
            </NavLink>
          </div>

        </div>

        <div className="flex flex-col">
          <NavLink to=''>Haqqımızda</NavLink>
          <NavLink to='about'>Vizyon&Misyon</NavLink>
          <NavLink to='about'>Korporativ Dəyərlərimiz</NavLink>
        </div>

        <div className="flex flex-col">
          <NavLink to=''>Menyu</NavLink>
          <NavLink to='products'>Məhsullarımız</NavLink>
          <NavLink to='quality'>Keyfiyyət</NavLink>
          <NavLink to='quality'>Karyera</NavLink>
        </div>

        <div className="contact me-6 font-semibold leading-10">
          <p>Əlaqə</p>
          <p>994 51 215 95 86</p>
          <p>info@orzax.az</p>
          <p className="leading-5 py-3  text-base">12 B. Bünyadov, Bakı 1040,Azərbaycan AZ1040 Bakı, Azerbaycan</p>
          <p className="leading-4 py-3 mt-2 text-sm font-semibold" >Diqqət:Bu Saytdakı Məlumatlar Həkim Və Ya Əczaçı İlə Məsləhətləşmənin Yerini Tutmur.</p>
        </div>
      </div>

      <div >
        <img src={BottomImg} alt="BottomImg " className="mt-2" />
        <p className="text-center text-xs font-semibold my-2 ">Orzaks İlaç ve Kimya Sanayi © 2023. All rights reserved.</p>
      </div>

    </footer>
  )
}
