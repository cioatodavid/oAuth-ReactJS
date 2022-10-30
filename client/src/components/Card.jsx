import React from 'react';
import { Link } from 'react-router-dom'

const Card = ({ post }) => {
  return (
    <div className='flex flex-col justify-center items-center max-w-md bg-gray-50 rounded-md shadow-xl p-2 '>
      <h1 className='m-2 text-xl font-semibold'>{post.title}</h1>
      <img className='object-cover h-64 w-full m-2' src={post.img} alt="img" />
      <p className='text-sm m-2 text-justify'>{post.desc}</p>
      <Link to={`/post/${post.id - 1}`}>
        <button className='bg-indigo-500 self-stretch text-white p-2 rounded'>Read More</button>
      </Link>
    </div>
  );
}

export default Card;
