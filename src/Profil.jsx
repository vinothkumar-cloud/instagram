import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profil() {

    const [profile,setProfile] = useState(null);
    const [followers,setFollowers] = useState([]);
    const [unfollowed,setUnfollowed] =useState(0);


    useEffect(() => {
      axios.get("http://localhost:3000/profil")
      .then(data => {
        setProfile(data.data);
        console.log(data)
      })
      .catch(err => console.log(err));

      axios.get("http://localhost:3000/followers")
      .then(data => setFollowers(data.data))
      .then(setUnfollowed(!unfollowed))
      .catch(err => console.log(err));
    },[unfollowed])

    function handleOnChange(e){
      setProfile( prev => ({
        ...prev,
        [e.target.name] : e.target.value 
      }))

    }

    const  handleUpdate = async () => {
      axios.put("http://localhost:3000/profil",profile)
      .then(console.log("updated"))
      .catch(err => console.log(err))
    }

    const handleUnFollow = async (id) => {
      axios.delete(`http://localhost:3000/followers/${id}`).then(alert("unfollowed")).catch(err => console.log(err));
    }



  return (
    <div>
      {profile ? <div className='m-5'>
        <img className='profile rounded-circle' src={profile.image_url} alt="profile pic" />
        <h5>{profile.user_name}</h5>

        <input type="text" value={profile.user_name} name='user_name'  className='form-control my-4'
        onChange={ handleOnChange }
        />

        <input type="text"
               name='profile_pic'
               value={profile.image_url} 
               className='form-control'
                onChange={ handleOnChange }
               />
               <button className='btn btn-primary my-4'onClick={handleUpdate }>update</button>
      </div> 
      
      :
       <div>
        loding
        </div>}

        {followers.length > 0 ?(followers.map((follow) => <div className='d-flex' key={follow.user_id}>{follow.user_name}
          <button className=' my-1 btn btn-info ms-auto' onClick={() => handleUnFollow(follow.id)}>un follow</button>
        </div> ))  : <div>
          loding</div>}
    </div>
  )
}

export default Profil
