
import { NavLink } from 'react-router-dom'
import Image1 from '../aboutAndNews/images/image1.png'
import Image2 from '../aboutAndNews/images/image3.png'

export const AboutAndNews = () => {
    return (
        <div className="w-full grid grid-cols-2 grid-rows-2  ">
            <div className='bg-newsBackground '>
                <div className='h-3/4  flex flex-col justify-between mt-12 ml-7'>

                    <p className='text-mainHover  font-semibold text-[30px] tracking-widest  pt-7 '>
                        Sağlamlığa Hədiyyə
                    </p>
                    <NavLink to='/about' className='text-xl bg-white text-mainHover rounded-2xl w-1/4 p-7 font-semibold  '>
                        Haqqımızda
                    </NavLink>
                </div>
            </div>

            <div>
                <img src={Image1} alt="" />
            </div>

            <div>
                <img src={Image2} alt="" />
            </div>

            <div>
                <div className='h-full flex flex-col justify-between py-14 px-9 '>
                    <p className='text-mainHover text-[14px] tracking-wider font-semibold '>
                        Biotin, vücudunuzun enerji oluşum metabolizmasına katkıda bulunduğu bir vitamindir. Ayrıca saçın ve cildin korunmasına yardımcı olur.
                    </p>
                    <NavLink to='news' className='text-xl bg-white text-mainHover rounded-2xl w-1/4  font-semibold  '>
                        Xəbərlər
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
