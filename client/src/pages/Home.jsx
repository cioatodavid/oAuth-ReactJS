import React from 'react';
import { posts } from '../data';
import Card from '../components/Card';

const Home = () => {

  function renderPosts() {
    return posts.map((post,index) => {
      return <Card key={index} post={post} />
    })
  }

  return (
    <div className='flex flex-wrap flex-row gap-10 items-center justify-center text-center m-10'>
      {renderPosts()}
    </div>
  );
}

export default Home;
