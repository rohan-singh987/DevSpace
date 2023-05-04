import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({
    blogData: { id, title, category, subCategory, description, createdAt, authorName }
}) => {
    return (
        <div>
            <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          {/* <img src={authorAvatar} alt='avatar' /> */}
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
        </div>
    )
}

export default BlogItem