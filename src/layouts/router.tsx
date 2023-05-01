import { useRoutes } from "react-router-dom"
import { appRoutes, routes } from "../router/routes"


export const AppRouter = () => {
  const router = useRoutes(appRoutes)
  return router
}

export const Router = () => {
  const router = useRoutes(routes)
  return router
}
