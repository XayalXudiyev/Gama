
import photo1 from '../bestSellers/images/1.png'
import photo2 from '../bestSellers/images/2.png'
import photo3 from '../bestSellers/images/1.png'
import photo4 from '../bestSellers/images/4.png'
import photo5 from '../bestSellers/images/5.png'
import photo6 from '../bestSellers/images/4.png'



export const BestSellers = () => {

    type Photo = {
        id: number,
        photo: string,
        alt: string,
        productName: string,
        price: string
    }

    const photos: Photo[] = [
        { id: 1, photo: photo1, alt: 'photo1', productName: 'OCEAN VİTAMİN D3K2 Damla', price: '28.00 ₼' },
        { id: 2, photo: photo2, alt: 'photo2', productName: 'OCEAN VİTAMİN D3K2 Damla', price: '28.00 ₼' },
        { id: 3, photo: photo3, alt: 'photo3', productName: 'OCEAN VİTAMİN D3K2 Damla', price: '28.00 ₼' },
        { id: 4, photo: photo4, alt: 'photo4', productName: 'OCEAN VİTAMİN D3K2 Damla', price: '28.00 ₼' },
        { id: 5, photo: photo5, alt: 'photo5', productName: 'OCEAN VİTAMİN D3K2 Damla', price: '28.00 ₼' },
        { id: 6, photo: photo6, alt: 'photo6', productName: 'OCEAN VİTAMİN D3K2 Damla', price: '28.00 ₼' },
    ]

    return (
        <div className='grid grid-cols-6  my-6 px-5'>

            {photos.map((photo) => (
                <div>

                    <div key={photo.id} className='col-span-1'>
                        <img src={photo.photo} alt={photo.alt} />
                    </div>
                    <p className='text-[12px] text-navColor text-center mt-4    '>
                        {photo.productName}
                    </p>
                    <p className='text-[12px] text-navColor text-center mt-1'>
                        {photo.price}
                    </p>
                </div>
            ))}
        </div>
    )
}
