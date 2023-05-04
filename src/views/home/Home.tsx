import { Hero } from "./hero/hero"
import { Informs } from "./informs/informs"
import { TitleComponents } from "./titleComponents"
import { BestSellers } from "./bestSellers/bestSellers"
import { PopularProducts } from "./popularProducts/popularProducts"
import { AboutAndNews } from "./aboutAndNews/aboutAndNews"
import { HealthForAll } from "./healthForAll/healthForAll"


export const Home = () => {
  return (
    <div className="">
      <Hero />
      <Informs />
      <TitleComponents />
      <BestSellers />
      <TitleComponents />
      <PopularProducts />
      <AboutAndNews />
      <TitleComponents />
      <HealthForAll />

    </div>
  )
}
