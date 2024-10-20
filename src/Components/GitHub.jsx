import React, { useEffect, useState } from "react";
import axios from "axios";
import './GitHub.css'
import { useLoaderData } from "react-router-dom";

function GitHub() {

    const gitHubUser = useLoaderData()
    
//   const [gitHubUser, setgitHubUser] = useState({
//     followers:' '
//   });

//   async function downloadGitHubInfo() {
//     const result = await axios.get(
//       "https://api.github.com/users/Jayant-Thorat-au50"
//     );
//     console.log(result);
    

//    return setgitHubUser({
//           ...gitHubUser,
//           followers:result.data.following,
//           profilePic:result.data.avatar_url,
//           name:result.data.name

//     })

    
//   }

//   useEffect(() => {
//     downloadGitHubInfo();
//   }, []);
  return (
    <>

      <div className="   col-12 d-flex justify-content-center align-items-center flex-column gap-2  text-white gitHub-bg">
       <div className=" col-12  py-2 d-flex justify-content-center align-items-center">
       <h4>GitHub followers : &nbsp;</h4>
       <h4 className="text-white">{gitHubUser.data.followers}</h4>
       </div>

       <div className=" d-flex  justify-content-between align-items-center col-12">
        <img src={gitHubUser.data.avatar_url} className=" m-auto border border-2 border-dark github-img my-2" alt="" />
         <div className=" m-auto">
         <h4>{gitHubUser.data.name}</h4>
         </div>
       </div>
      </div>
    </>
  );
}

export default GitHub;
