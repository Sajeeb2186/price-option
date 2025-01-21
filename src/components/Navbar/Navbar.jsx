import { list } from "postcss";
import Link from "../Link/Link";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {


    const[open,setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:username", name: "User Profile" },
      ];
      
      
      
    return (
        <nav className="text-black bg-green-500 p-6">

            <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>

                {
                    open===true? <IoCloseSharp />:  < MdMenuOpen />
                }


           




            </div>



            
            <ul className={`md:flex  duration-1000 absolute md:static bg-green-500 px-6   ${open ? 'left-0 top-20':' -left-60 top-20'} `}>
                {

                    routes.map(route=> <Link key={route.id} route={route}></Link>)




                }


            </ul>
              

             

            
        </nav>

        


    
    );
};

export default Navbar;