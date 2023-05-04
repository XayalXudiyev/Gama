import { ReactComponent as Catalog } from './informsIcons/catalog.svg'
import { ReactComponent as Quality } from './informsIcons/quality.svg'
import { ReactComponent as Partners } from './informsIcons/partner.svg'
import { ReactComponent as Career } from './informsIcons/career.svg'
import { ReactComponent as Blog } from './informsIcons/blog.svg'
import { ReactComponent as Phone } from './informsIcons/phone.svg'
import { NavLink } from 'react-router-dom'

type Icons = {
    id: number,
    name: string,
    icon: any,
    to: string
}

const icons: Icons[] = [

    {
        id: 1,
        name: 'Online Kataloq',
        icon: <Catalog />,
        to: '/catalog'
    },
    {
        id: 2,
        name: 'Keyfiyyət',
        icon: <Quality />,
        to: '/quality'

    },
    {
        id: 3,
        name: 'Partnyorlar',
        icon: <Partners />,
        to: '/partners'
    },
    {
        id: 4,
        name: 'Karyera',
        icon: <Career />,
        to: '/career'
    },
    {
        id: 5,
        name: 'Blog',
        icon: <Blog />,
        to: '/blog'
    },
    {
        id: 6,
        name: 'Bizimlə Əlaqə',
        icon: <Phone />,
        to: '/phone'
    },
]

export const Informs = () => {
    return (
        <div className=" flex justify-center">
            <div className="grid grid-cols-6 gap-x-12 m-3 pl-3">
                {
                    icons.map((icon) => (
                        <NavLink to={icon.to} key={icon.id} className={'flex flex-col items-center'}>
                            <div className='bg-main hover:bg-mainHover rounded-full flex items-center  justify-center p-7 w-24 h-24 '>
                                {icon.icon}
                            </div>
                            <p className='text-center mt-1 font-semibold w-auto text-navColor text-lg '>
                                {icon.name}
                            </p>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};
