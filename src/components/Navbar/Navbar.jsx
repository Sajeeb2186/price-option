import { list } from "postcss";
import Link from "../Link/Link";


const Navbar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:username", name: "User Profile" },
      ];
      
      
      
    return (
        <nav>

            
            <ul className="md:flex">
                {

                    routes.map(route=> <Link key={route.id} route={route}></Link>)




                }


            </ul>
              

             

            
        </nav>
    );
};

export default Navbar;