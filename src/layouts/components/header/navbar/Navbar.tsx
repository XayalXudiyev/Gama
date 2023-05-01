

import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../../../../assets/img/ggg.svg';
import { ReactComponent as Icon } from '../../../../assets/img/icon.svg';
import { ReactComponent as Hearticon } from '../../../../assets/img/heartIcon.svg';
import { ReactComponent as ShoppingCarticon } from '../../../../assets/img/shoppingCartIcon.svg';



export const Navbar = () => {

    type Link = {
        to: string,
        text: string
    }

    const links: Link[] = [
        { to: '/', text: 'Əsas səhifə' },
        { to: '/products', text: 'Məhsullar', },
        { to: '/about', text: 'Haqqımızda' },
    ]

    return (
        <nav className="h-24 bg-lime-300 flex items-center   ">

            <span className="h-10 w-32 ps-10 pt-1">
                <Logo className="w-32 h-8" />
            </span>

            {links.map((link) => (
                <NavLink to={link.to} key={link.to} className={'w- flex justify-between ml-20 text-lg  text-navColor whitespace-nowrap '}>
                    {link.text}
                </NavLink>
            ))}

            <div className="ms-auto flex gap-x-7 pr-10 ">
                <Icon className="w-5 h-5 " />
                <Hearticon className="w-5 h-5  text-lg" />
                <ShoppingCarticon className="w-5 h-5" />
            </div>
        </nav>
    );
}

