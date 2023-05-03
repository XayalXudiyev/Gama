import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/app'
import About from '../views/about'
import Home from '../views/home'
import Products from '../views/products'


function App() {

  return (


    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>


  )
}

export default App
