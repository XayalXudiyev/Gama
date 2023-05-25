import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/img/ggg.svg';
import { ReactComponent as Icon } from '../../../../assets/img/icon.svg';
import { ReactComponent as Hearticon } from '../../../../assets/img/heartIcon.svg';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/img/dropDownIconn.svg';
import { ReactComponent as ShoppingCarticon } from '../../../../assets/img/shoppingCartIcon.svg';

export const Navbar = () => {
    type Link = {
        to: string,
        text: string
    }

    const links: Link[] = [
        { to: '/', text: 'Əsas səhifə' },
        { to: '/products/minerals', text: 'Məhsullar', },
        { to: '/about', text: 'Haqqımızda' },
    ]

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [arrowDown, setArrowDown] = useState(true);

    const [subMenuVisible, setSubMenuVisible] = useState(false);


    return (
        <nav className="h-28  flex  items-center  border-b-2 ">
            <span className="h-10 w-32 ps-10 pt-1">
                <Logo className="w-32 h-8" />
            </span>

            {links.map((link, index) => {
                return (
                    <div key={link.to} className="relative ">
                        <NavLink
                            to={link.to}
                            className={'w- flex justify-between ml-20 text-base font-bold font-sans text-navColor whitespace-nowrap '}
                        >
                            {link.text}
                            {index === 1 && (
                                <>
                                    <ArrowDownIcon
                                        onMouseEnter={() => { setDropdownVisible(true); setArrowDown(false); }}
                                        className={`w-3 h-6 inline-block ml-1 ${arrowDown ? '' : 'transform rotate-180'} `} />
                                    {dropdownVisible && (

                                        <div
                                            className="absolute top-0 left-0 mt-8 bg-white opacity-80 text-navColor"
                                            onMouseEnter={() => { setDropdownVisible(true); setArrowDown(false); }}
                                            onMouseLeave={() => { setDropdownVisible(false); setArrowDown(true); }}
                                        >
                                            <NavLink to="/minerals" className="block px-4 py-2 hover:bg-gray-200 "
                                                onMouseEnter={() => setSubMenuVisible(true)}
                                                onMouseLeave={() => setSubMenuVisible(false)}
                                            >
                                                Minerallar

                                                Minerallar
                                            </NavLink>
                                            <div className={`absolute left-full top-0 mt-0 bg-white opacity-80 text-navColor w-64 h-auto transition-all duration-300 ease-in-out ${subMenuVisible ? 'visible' : 'invisible'}`}
                                                onMouseEnter={() => setSubMenuVisible(true)}
                                                onMouseLeave={() => setSubMenuVisible(false)}
                                            >

                                                <div className='bg-gray-200  p-3' >
                                                    <h1 className='text-center mb-5'>
                                                        subMenu
                                                    </h1>
                                                    <p className='w-full whitespace-normal text-center'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut esse in laudantium, neque id est! Officia voluptate minus esse!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    </div>
                );
            })}

            <div className="ms-auto flex gap-x-7 pr-10 ">
                <Icon className="w-5 h-5 " />
                <Hearticon className="w-5 h-5  text-lg" />
                <ShoppingCarticon className="w-5 h-5" />
            </div>
        </nav>
    )
}

