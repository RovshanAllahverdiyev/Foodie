import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const footerLink = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 1,
    name: "Services",
    link: "#services",
  },
  {
    id: 1,
    name: "Login",
    link: "#login",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-16">
          {/* Logo side */}
          <div className="flex flex-col  gap-5">
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-bold sm:text-3xl "
            >
              <img src={footerLogo} alt="footer logo" className="w-14" />
              Foodie
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quo sint excepturi eius explicabo qui tempore culpa
              quisquam nihil, dicta, perferendis sunt ut error. Excepturi.
            </p>

            <div className="flex items-center gap-2">
              <FaLocationArrow />
              <p>Baku, Azerbaijan</p>
            </div>

            <div className="flex items-center gap-2">
              <FaMobileAlt />
              <p>+994554233353</p>
            </div>

            <div className="flex gap-2">
              <a href="#" className="text-4xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-4xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-4xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-16 my-10">
            {/* Important Link */}
            <div className="flex flex-col gap-4 ">
              <h1 className="text-xl font-bold text-justify">Important Links</h1>
              {footerLink.map((data) => (
                <ul>
                  <li>
                    <a href={data.link} className="hover:text-primary duration-300">{data.name}</a>
                  </li>
                </ul>
              ))}
            </div>

            {/* Company Link */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-justify">Company Links</h1>
              {footerLink.map((data) => (
                <ul>
                  <li>
                    <a href={data.link} className="hover:text-primary duration-300">{data.name}</a>
                  </li>
                </ul>
              ))}
            </div>

            {/*  Link */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-justify"> Links</h1>
              {footerLink.map((data) => (
                <ul>
                  <li>
                    <a href={data.link} className="hover:text-primary duration-300">{data.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>


        <div className="border-t mt-12 ">
          <div className=" text-center mt-4">
          © copyright 2024 || Developed by <a href="https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/" target="_blank" className="text-primary">Rovshan</a> 
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
