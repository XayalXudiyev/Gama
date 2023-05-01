import HomePage from "../../../assets/img/homepage 1.jpg";



export const Hero = () => {
    return (
        <div className="relative">
            <img src={HomePage} className="w-full h-auto bg-no-repeat " />
            <input type="text" placeholder="Nə axtarırsınız" className="shadow-lg w-3/5 h-1/6 rounded-lg flex absolute -translate-y-3/4 px-5 left-1/4 focus:outline-none" ></input>
        </div>
    )
}
