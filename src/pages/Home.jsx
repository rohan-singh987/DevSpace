
import BlogItem from '../components/BlogItem';
import Search from '../components/Search';
import { data } from '../config/data';

const Home = () => {
  return (
    <div>
        <Search />

        <BlogItem blogs={data} />
    </div>
  )
}

export default Home