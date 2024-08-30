import './App.css'
import Heading from './Component/Heading';
import Body from './Component/Body';
import {Routes,Route, Link} from 'react-router-dom';
import RestaurantMenu from './Component/RestaurantMenu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heading />} >
        <Route path="/" element={<Body />} />
        <Route path="/ResturantMenu/:id" element={<RestaurantMenu />} />
      </Route>

    </Routes>
  )
}

export default App;