
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className=''>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog:id' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App