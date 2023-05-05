import { Content } from "./content/content"
import { Sidebar } from "./sidebar/sidebar"

export const Main = () => {
  return (
    <div className="grid  grid-cols-[1fr,3.1fr] mx-10 mt-20">
      <Sidebar />
      <Content />
    </div>
  )
}
