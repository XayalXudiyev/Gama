// views
import Home from '../views/home'
import About from '../views/about'
import Products from '../views/products'
import AppLayout from '../layouts/app'


interface IRoute {
  path: string
  element: JSX.Element
  children?: IRoute[]
}

export const appRoutes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/product/:id',
    element: <Products />,
  },
  {
    path: '/about',
    element: <About />,
  },
]

export const routes = [
  {
    path: '/*',
    element: <AppLayout />
  }
]