import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/resorces/logo.png"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = <>
    <li><NavLink to='/' className={({ isActive }) =>
                  isActive
                    ? "border-b-2 bolder-[#9F62F2] text-[#9F62F2]"
                    : "font-semibold "}>
                Home</NavLink></li>
    <li><NavLink to='/apps'  className={({ isActive }) =>
                  isActive
                    ? "border-b-2 bolder-[#9F62F2] text-[#9F62F2]"
                    : "font-semibold "}>Apps</NavLink></li>
    <li><NavLink to='/installation'  className={({ isActive }) =>
                  isActive
                    ? "border-b-2 bolder-[#9F62F2] text-[#9F62F2]"
                    : "font-semibold "}>Installation</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      
        <div className="navbar-start pl-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
         {/* Logo Section */}
       <div className='flex items-center gap-1'>
        <img src={logo} alt=""  className='h-10 animate-spin'/>
         <Link to='/' className=" text-l font-bold text-[#9F62F2]">HERO.IO</Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          {links}
          
        </ul>
      </div>
      <div className="navbar-end pr-10">
        <a href="https://github.com/afsara-afrose?tab=repositories"target="_blank" rel="noopener noreferrer" className='common-btn flex gap-1 items-center' >
        <FaGithub />
        <p> Contribute</p></a>
        
      </div>
      
    </div>
  );
};

export default Navbar;
