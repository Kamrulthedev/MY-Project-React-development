import { useState } from "react";
import Link from "../Links/Link";
import {AiOutlineMenuUnfold, AiFillCloseCircle } from 'react-icons/ai';


const Nav = () => {
    const {open, setOpen} = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' },
      ];
      
    return (
        <nav>
           <div className="md:hidden" onClick={()=>setOpen(!open)}> 
           {
            open === true ? <AiFillCloseCircle></AiFillCloseCircle> :  <AiOutlineMenuUnfold className="text-2xl"></AiOutlineMenuUnfold>
           }
          
           </div>

           <ul className="md:flex">
           {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default Nav;