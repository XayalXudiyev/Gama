
import Image1 from './images/3.png'
import Image2 from './images/2.png'
import Image3 from './images/3.png'
import Image4 from './images/4.png'
import Image5 from './images/5.png'
import Image6 from './images/6.png'


export const Minerals = () => {

  type Data = {
    id: number,
    url: string,
    alt: string,
    desc: string,
    productName: string,
    price: string
  }

  const data: Data[] = [
    {
      id: 1,
      url: Image1,
      alt: 'photo1',
      desc: "1. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'
    },
    {
      id: 2,
      url: Image2,
      alt: 'photo2',
      desc: "2. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'
    },
    {
      id: 3,
      url: Image3,
      alt: 'photo3',
      desc: "3. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'
    },
    {
      id: 4,
      url: Image4,
      alt: 'photo4',
      desc: "4. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'
    },
    {
      id: 5,
      url: Image5,
      alt: 'photo5',
      desc: "5. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'
    },
    {
      id: 6,
      url: Image6,
      alt: 'photo6',
      desc: "6. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'

    },
    {
      id: 7,
      url: Image6,
      alt: 'photo6',
      desc: "6. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'

    },
    {
      id: 8,
      url: Image6,
      alt: 'photo6',
      desc: "6. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'

    },
    {
      id: 9,
      url: Image6,
      alt: 'photo6',
      desc: "6. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'

    },
    {
      id: 10,
      url: Image6,
      alt: 'photo6',
      desc: "6. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'

    },
    {
      id: 11,
      url: Image6,
      alt: 'photo6',
      desc: "6. Melumatları yaz",
      productName: 'OCEAN VİTAMİN D3K2 Damla',
      price: '28.00 ₼'

    },


  ]

  return (
    <div >
      <div>
          <ul className="grid grid-cols-3 text-center overflow-x-hidden   h-[750px] text-sm" >
            {
              data.map((item) => (
                <li key={item.id} className='ml-9 mb-9 '>
                  <div className="relative">
                    <img src={item.url} alt={item.alt} className="transition-all duration-300" />
                    <div className="absolute inset-0 bg-footerColor bg-opacity-95 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-black">
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <p className='py-2 mt-3'>
                    {item.productName}
                  </p>
                  <p>
                    {item.price}
                  </p>
                </li>
              ))
            }

          </ul>


      </div>
        <div className='ml-10 text-base text-justify'>
          <h1 className='font-bold mt-10 mb-5'>Vitamin Mineral Gıda Takviyesi Ürünleri</h1>
          <p>
            Vitamin Mineral Gıda Takviyesi Ürünleri Faydaları Nelerdir?C vitamini yoğun fiziksel egzersiz sırasında ve sonrasında bağışıklık sisteminin normal fonksiyonunun korunmasına katkıda bulunur.C vitamini kan damarlarının normal fonksiyonu için gerekli olan normal kollajen oluşumuna katkıda bulunur.C vitamini cildin normal fonksiyonu için gerekli olan normal kollajen oluşumuna katkıda bulunur.C vitamini normal enerji oluşum metabolizmasına katkıda bulunur.C vitamini yorgunluk ve bitkinliğin azalmasına katkıda bulunur.C vitamini demir emilimini arttırır.C vitamini kemiklerin normal fonksiyonu için gerekli olan normal kollajen oluşumuna katkıda bulunur.C vitamini kıkırdağın normal fonksiyonu için gerekli olan normal kollajen oluşumuna katkıda bulunur.C vitamini diş etlerinin normal fonksiyonu için gerekli olan normal kollajen oluşumuna katkıda bulunur.C vitamini dişlerin normal fonksiyonu için gerekli olan normal kollajen oluşumuna katkıda bulunur.C vitamini bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.C vitamini E vitamininin indirgenmiş formunun yeniden oluşmasına katkıda bulunur.D vitamini kalsiyumun ve fosforun normal emilimine/kullanımına katkıda bulunur.D vitamini normal kan kalsiyum düzeyine katkıda bulunur.D vitamini bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.D vitamini normal kas fonksiyonunun korunmasına katkıda bulunur.D vitaminin hücre bölünmesinde görevi vardır.D vitamini normal dişlerin korunmasına katkıda bulunur.D vitamini normal kemiklerin korunmasına katkıda bulunur.K vitamini normal kan pıhtılaşmasına katkıda bulunur.K vitamini normal kemiklerin korunmasına katkıda bulunur.B12 vitamini yorgunluk ve bitkinliğin azalmasına katkıda bulunur.B12 vitamini vitamini normal kırmızı kan hücresi oluşumuna katkıda bulunur.B12 vitamini normal homosistein metabolizmasına katkıda bulunur.B12 vitamini normal enerji oluşum metabolizmasına katkıda bulunur.B12 vitamini bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.B12 vitaminin hücre bölünmesinde görevi vardır.Demir normal enerji oluşum metabolizmasına katkıda bulunur.Demir kırmızı kan hücrelerinin ve hemoglobinin normal oluşumuna katkıda bulunur.Demir vücutta normal oksijen taşınımına katkıda bulunur.Demir bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.Demir yorgunluğun ve bitkinliğin azalmasına katkıda bulunur.Demirin hücre bölünmesinde görevi vardır.
          </p>
        </div>
    </div>

  )
}
