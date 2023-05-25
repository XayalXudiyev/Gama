import Video from '../textAndVideo/video/video.jpg'

export const TextAndVideo = () => {
    return (
        <div className='grid grid-cols-2 my-16 gap-24'>
            <div className=' text-justify text-base leading-5'>
                <p>
                    Orzax Pharmaceuticals 2004-cü ildə əczaçıların, həkimlərin və investorların birləşməsi ilə istehlakçılara sağlamlıq sahəsində əlavəsiz və təbii məhsullar təqdim etmək üçün yaradılmışdır. Peşə olaraq illərin bilik və təcrübəsi ilə istehsal olunan ilk məhsullar 2005-ci ildə bazara çıxarılıb. Bu məhsulları öz sahəsində yenilikçi və qabaqcıl məhsullar izləyir. Bu illər ərzində “Sağlamlığa Hədiyyə” şüarı ilə məhsul portfelimizi və bazar payımızı genişləndirdik və 150-yə yaxın məhsul növünə çatdıq.İnsan sağlamlığını dəstəkləmək üçün məhsullarımızı son istehlakçıya təqdim etmək şüuru və məsuliyyəti ilə hər zaman keyfiyyətli və təbii məhsullar təqdim etməyi hədəfləyir və bu istiqamətdə işlərimizi həyata keçiririk.Məhsullarımıza insan sağlamlığına zərər verəcək və ya mənfi təsir edəcək heç bir komponent daxil etmirik. Biz patentli xammaldan istifadə edirik və onları halal qaydalar çərçivəsində birləşdiririk. Biz istehsal prosesimizi hər gün yenilənən texnologiya ilə təkmilləşdirir, təbiətdən aldığımız ilhamla innovativ və orijinal məhsullar istehsal edib sağlamlığınıza təqdim edirik.Keyfiyyətinə əmin olmadığımız heç bir məhsulu sizə təklif etmirik və məhsulumuzun keyfiyyətini üstün tuturuq.Keçmişdən gələcəyə getdiyimiz bu yolda bizi müşayiət etdiyiniz üçün təşəkkür edirik. Orzaks Pharmaceuticals olaraq biz hər zaman sizin üçün qabaqcıl məhsullar istehsal etməyə və "Sağlamlığa Hədiyyələr" təqdim etməyə davam edəcəyik.</p>
            </div>

            <div >
                {/*
                 <video >
                    <source src={Video} type='' />
                </video> 
                */}
                <img src={Video} alt="" className='w-full h-full' />
            </div>

        </div>
    )
}
