import React from "react";
import { useUserContext } from "../context/userContext";
const Home=()=>{
    const {user,logOut}=useUserContext();
    return(
        <div className="ui container center">
            <div className="home-profile">
                <div className="ui message success" style={{marginTop:"150px"}}>
                    <h3>{user.name}, you have logged in.</h3>
                    {!user.isGuest && (<button className="ui button blue" onClick={logOut}>Logout</button>)}
                </div>
            </div>
        </div>
    )
}
export default Home;