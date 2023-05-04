import Image from '../healthForAll/images/img1.png'
import Icon1 from '../healthForAll/images/icon1.png'
import Icon2 from '../healthForAll/images/icon2.png'
import Icon3 from '../healthForAll/images/icon3.png'
import Icon4 from '../healthForAll/images/icon4.png'





export const HealthForAll = () => {
    return (
        <div className="grid grid-cols-3 my-10 mx-6 h-64 ">
            <div className=" grid grid-rows-2">

                <div className='flex items-center'>
                    <img src={Icon1} className='w-24 h-24'  />
                    <p className='text-navColor  font-bold text-lg leading-5 ml-7'>
                        Nearly 0000 health <br /> & wellness products
                    </p>
                </div>
                <div className='flex items-center'>

                    <img src={Icon2}  className='w-24 h-24'  />
                    <p className='text-navColor  font-bold text-lg leading-5 ml-7'>
                        Committed to you: <br /> trusted service
                    </p>
                </div>
            </div>
            <div className=" grid grid-rows-2">

                <div className='flex items-center'>

                    <img src={Icon3}  className='w-24 h-24'  />
                    <p className='text-navColor  font-bold text-lg leading-5 ml-7'>
                        Special items: <br /> organic&Gluten-free
                    </p>
                </div>
                <div className='flex items-center'>
                    <span>
                        <img src={Icon4}  className='w-24 h-24'  />
                    </span>
                </div>
            </div>

            <div className="bg-mainHover">
                <img src={Image}  className='h-full' />
            </div>
        </div>
    )
}
