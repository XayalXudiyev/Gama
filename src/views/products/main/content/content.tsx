import { Outlet } from "react-router-dom"

export const Content = () => {
  return (
    <div className="overflow-y-auto  h-[1200px] text-navColor">
     < Outlet/>
    </div>
  )
}
