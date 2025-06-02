import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts").
    then((res) => res.json()).
    then((res => setPosts(res))).
    catch((err) => console.log(err));
  },[]);

  return (
    <div className='d-flex justify-content-center'>
      {posts.length > 0 ?(<div>{posts.map((post) => <div className='my-3' key={post.id}>
        <div className='d-flex'><img className='dp rounded-circle' src={post.image_url} alt='profile pic'/>
        <h5>{post.user_name}</h5>
        </div>
        <img className='image' src={post.img} alt="postImg" />
        <div className='cmt'>
        <div><i className=' bi bi-heart'></i></div>
        <div className=' bi bi-chat'></div>
        <div className=' bi bi-send'></div>
        </div>
        <div>
         <b> {post.likes} likes</b>
        </div>
        <p>{post.comments}</p>
      </div>)}
      </div>)
      :
      (<div>loding post</div>)}
    </div>
  )
}

export default Posts


