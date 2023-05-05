import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/app'
import About from '../views/about'
import Home from '../views/home'
import Products from '../views/products'
import { Minerals } from '../views/products/main/content/minerals/minerals'
import { Vitamins } from '../views/products/main/content/vitamins/vitamins'
import { Serums } from '../views/products/main/content/serums/serums'
import { SpecialFoods } from '../views/products/main/content/specialFoods/specialFoods'
import { Probiotics } from '../views/products/main/content/probiotics/probiotics'
import { Collagens } from '../views/products/main/content/collagens/collagens'


function App() {

  return (


    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} >
              <Route path="minerals" element={<Minerals />} />
              <Route path="vitamins" element={<Vitamins />} />
              <Route path="serum" element={<Serums />} />
              <Route path="specialFoods" element={<SpecialFoods />} />
              <Route path="brobiotics" element={<Probiotics />} />
              <Route path="collagens" element={<Collagens />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>


  )
}

export default App
