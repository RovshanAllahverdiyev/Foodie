import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white ">
      <div className="container py-3">
        <div className="flex justify-between items-center">

          {/* Logo section */}
          <div className="flex items-center gap-2">
            <a href="#home">
              <img src={Logo} alt="Header Logo" className="w-12" />
            </a>
            <h1 className="font-bold text-2xl sm:text-3xl ">Foodie</h1>
          </div>

          <div className="flex justify-between items-center gap-4">
            <DarkMode />
            <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full hover:scale-105 duration-300 text-white">
                Order 
                <FaCartShopping />
              </button>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
