import HomePage from "../../../assets/img/homepage 1.jpg";
import { SearchSection } from "./searchSection";

export const Hero = () => {
  return (
    <div>
      <img src={HomePage} className="w-full h-auto bg-no-repeat " />

      <SearchSection />
    </div>
  );
};
