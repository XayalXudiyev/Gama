import { Content } from "./content/content"
import { Sidebar } from "./sidebar/sidebar"
import { useState } from "react"
import { Minerals } from "./content/minerals/minerals"



export const Main = () => {
  const [activeCategory, setActiveCategory] = useState(Minerals);

  const handleCategoryChange = (newCategoryComponent)  => {
    setActiveCategory(newCategoryComponent);
  };
  return (
    <div className="grid  grid-cols-[1fr,3.1fr]  my-16 ">
      <Sidebar onCategoryChange={handleCategoryChange} />
      <Content >
        <activeCategory />
      </Content>
    </div>
  )
}
