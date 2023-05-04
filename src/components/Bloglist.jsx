import BlogItem from './BlogItem'
import '../index.css';

const Bloglist = ({ blogs }) => {
    console.log(blogs);
  return (
    <div className='blogList-Wrap'>
        {blogs.map((blog) =>
            <BlogItem blogData={blog} key={blog.id} />
        )}
    </div>
  )
}

export default Bloglist;