import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {

const[profile,setProfile] = useState(null);
const[suggestions,setSuggestions] = useState([]);

useEffect(() =>{
  fetch("http://localhost:3000/profil")
  .then(data => data.json())
  .then(data => setProfile(data))
  .catch(err => console.log(err));

    fetch("http://localhost:3000/sugestion")
  .then(data => data.json())
  .then(data => setSuggestions(data))
  .catch(err => console.log(err));
},[])

const handleFollow = async (id,user_name) => {
  axios.post("http://localhost:3000/followers",{"id":id,"user_name":user_name}).then(alert("followed")).catch(err => console.log(err));
}



  return (
    <div>
      <div className='suggestions w-75 m-4'>
        {profile ?
       <div className='d-flex'><img className='dp rounded-circle' src={profile.image_url} alt='profile pic'/>
        <h5>{profile.user_name}</h5>
        <small className='ms-auto text-primary'>switch</small>
        </div>
         : 
        <div>loding</div>}

        <div className='d-flex'>
          <small>suggested for you</small>
          <b className='ms-auto'>see all</b>
          </div>
        
          <div className='pro'>
           {suggestions.length > 0 ?(<div>{suggestions.map((sugest) => <div className='' key={sugest.id}>
        <div className='d-flex'><img className='dp rounded-circle' src={sugest.image_url} alt='profile pic'/>
        <h5>{sugest.user_name}</h5>
        <a className='text-primary ms-auto' onClick={() => handleFollow(sugest.id,sugest.user_name)}>follow</a>
        </div>
        
      </div>)}
      </div>)
      :
      (<div>loding ...</div>)}
      </div>

        
      </div>
    </div>
  )
}

export default Suggestions
