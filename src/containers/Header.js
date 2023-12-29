import React from 'react';
import '../App.css'
import { useUserContext } from '../context/userContext';
import uiet from '../image/uiet.png'
import { Link } from 'react-router-dom';
const Header=()=>{
    // const user="Guest";
    const {user,logOut}=useUserContext();
    console.log(user);
    return(
        <div className="ui fixed menu ">
            <div className="ui container center">
                <Link to="/">
                <img src={uiet} alt="Uiet" />
                </Link>
                <div className="profile">
                    <h2><i className="fa-solid fa-user"></i> Welcome {user.name}</h2>
                    {!user.isGuest && (<button className="ui button blue" onClick={logOut}>Logout</button>)}
                </div>
            </div>
        </div>
    )
}
export default Header;