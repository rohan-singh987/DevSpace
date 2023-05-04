import Search from '../components/Search';
import { data } from '../config/data';
import Bloglist from '../components/Bloglist';

const Home = () => {
  return (
    <div>
        <div className='flex align-center justify-center'>
        <Search />
        </div>

    <div className='text-center align-center mt-10 w-4/5 mx-auto'>
        <Bloglist blogs={data} />
    </div>
    </div>
  )
}

export default Home