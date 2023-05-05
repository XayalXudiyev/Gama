import { NavLink } from "react-router-dom"
export const Sidebar = () => {

type Link = {
  id: number,
  text: string,
  to: string
}

  const links:Link[] = [
    {
      id: 1,
      text: 'Minerallar',
      to: '/products/minerals'
    },
    {
      id: 2,
      text: 'Vitaminlər',
      to: '/products/vitamins'
    },
    {
      id: 3,
      text: 'Serumlar',
      to: '/products/serum'
    },
    {
      id: 4,

      text: 'Xüsusi Qidalar',
      to: '/products/specialFoods'
    },
    {
      id: 5,
      text: 'Probiotiklər',
      to: '/products/brobiotics'
    },
    {
      id: 6,
      text: 'Kollagenlər',
      to: '/products/collagens'
    },
  ]


  return (
    <div className="bg-footerColor text-start pl-5 pt-10">
      <h1 className="pb-5">Kateqoriyalar</h1>
      <ul>
        {
          links.map((link) => (
            <li key={link.id} className='text-[12px] text-navColor  py-5'>
              <NavLink to={link.to} className='text-[12px] text-navColor text-center mt-4'>
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
