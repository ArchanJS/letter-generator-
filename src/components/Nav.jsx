import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{minWidth:'100vw'}}>
      <nav class="navbar navbar-light" style={{backgroundColor:'#00703e',backgroundImage:'url("https://www.transparenttextures.com/patterns/light-gray.png")'}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img
              src="https://i.postimg.cc/CLp1Ntwr/logo.jpg"
              alt=""
              width="30"
              height="24"
            />      
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
