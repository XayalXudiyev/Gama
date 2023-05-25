
import Logo from '../hero/images/hero.png'

export const Hero = () => {
  return (
    <div className='relative'>
      <img src={Logo} alt="" />
      <div className='absolute inset-0 flex  justify-center flex-col w-1/4  text-center text-aboutHero font-semibold' >
        <h1 className=' text-5xl'>Biz kimik</h1>
        <p className=' text-sm'>Biz insan sağlamlığı barəsində mütəxəssisik</p>
      </div>
    </div>
  )
}
