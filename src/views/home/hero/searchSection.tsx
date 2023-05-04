import { ReactComponent as SearchIcon } from "../../../assets/img/searchIcon.svg";

export const SearchSection = () => {
  return (
    <div className="relative bg-white shadow-md  py-3 w-[63%] rounded-lg flex justify-between -translate-y-3/4 left-80 focus:outline-none pe-20 ps-9 -ms-4">
      <SearchIcon className=" relative top-3  me-3" />

      <input
        type="text"
        placeholder="Nə axtarırsınız?"
        className=" focus-within:outline-none  text-xl to-navColor"
      />

      <select
        name=""
        id=""
        className=" border-l-2 text-navColor bg-white  text-lg pl-10 mx-9 ms-auto focus:outline-none "
      >
        <option value="salam"></option>
        <option value="" >Djquwahdbsjh </option>
      </select>

      <button className="bg-main text-2xl text-white  rounded-2xl px-4 font-semibold py-2 ">
        Axtar
      </button>
    </div>
  );
};
