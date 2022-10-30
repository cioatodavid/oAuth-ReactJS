import React from 'react';
import {posts} from '../data';

import { useParams } from 'react-router-dom';

const Post = () => {

    const post = posts[useParams().id];

  return (
    <div className=''>
      <div className="flex flex-col">
        <img className='object-cover w-full h-96 brightness-50' src={post.img} alt={post.title} />
        <h1 className='text-3xl text-center font-bold mt-4 uppercase'>{post.title}</h1>
        <h3 className='m-4 text-lg text-neutral-900 text-center font-semibold'>{post.desc}</h3>
        <p className='text-md text-justify text-neutral-800'>{post.longDesc}</p>

      </div>
    </div>
  );
}

export default Post;
