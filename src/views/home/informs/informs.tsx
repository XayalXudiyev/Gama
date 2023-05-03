import { ReactComponent as Catalog } from '../../../assets/img/shoppingCartIcon.svg'

export const Informs = () => {
    return (
        <div className=" w-full flex justify-center bg-navColor ">
            <div className="grid grid-cols-6 w-4/6">
                <div className="rounded-full p-12   flex items-center justify-center">
                    <Catalog className='rounded-full h-10 w-10 bg-white ' />
                    
                </div>

            </div>
        </div>
    );
};
