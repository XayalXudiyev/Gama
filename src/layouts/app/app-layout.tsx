import  Footer  from "../components/footer"
import  Header  from "../components/header"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
