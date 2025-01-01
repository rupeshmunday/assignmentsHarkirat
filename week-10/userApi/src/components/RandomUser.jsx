import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RandomUser = () => {
  const [page,setPage ] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function getRandomUserData (){
      setLoading(true);
      const res = await axios.get(`https://randomuser.me/api?page=${page}`);
      console.log("res-----------",res.data.results[0]);
      const userData = res.data.results[0];
      setUserList(prevList => [...prevList,userData]);
      setLoading(false);
      // console.log(userList)
    }
    getRandomUserData();
  },[page])
  
  function handleLogic(){
    // console.log("Hello------------")
    setPage(currentPage => currentPage + 1);
  }

  return (
    <div>
      <div>Random user</div>
      <div>
        {userList.map((user,index) =>{
            // console.log(user.name.first,"user");
            
            return (<div key={index} className="user-card">
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-image"
            />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
          </div>)
          })}
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      <button onClick={handleLogic}>Load more User</button>
    </div>
  )
}

export default RandomUser