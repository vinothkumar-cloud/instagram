import React, { useEffect, useState, } from 'react'
 import {useNavigate} from 'react-router-dom';
function Stories() {


  const[stories,setStories] = useState([]);

  const navigate = useNavigate()
  let tot = 0;

  useEffect(() => {
    fetch("http://localhost:3000/story")
    .then(data => data.json())
    .then(data => setStories(data))
    .catch(err => console.log(err))
  },[]);



  return (
    <div className='story d-flex justify-content-center'>
      <div className='d-none'>{tot = stories.length }</div>
      {stories.length > 0 ? (
        stories.map((story) => <div key={story.id} className='mx-1' onClick={() => navigate(`/story/${story.id}/${tot}`)} >
          <div className='gradient-border'>
            <img className='story-dp rounded-circle ' src={story.image_url} alt="dp" />
          </div>
          <p className='text-truncate'style={{width : "50px"}}>{story.user_name}</p>
        </div>)
      )
    :(
    <p>Loding</p>
    )  
    }
      
    </div>
  )
}

export default Stories
