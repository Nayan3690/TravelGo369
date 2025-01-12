import FooterLogo from "../../assets/logo.png";
import Naturevid from "../../assets/footer.mp4";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 h-full overflow-hidden 
      w-full object-cover z-[-1]"
      >
        <source src={Naturevid} type="video/mp4" />
      </video>
      <div className="container mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div>
            <h1
              className="flex items-center gap-3 text-xl sm:texl-3xl
            font-bold text-justify sm:text-left"
            >
              <img src={FooterLogo} alt="" className="max-h-[60px] pl-10" />
            </h1>
            <p className="text-sm pl-10 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              quia id non sit, consequuntur minus ipsa culpa hic consequatur
              illo pariatur alias ea architecto praesentium tenetur temporibus
              voluptatibus! Quae, omnis?
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3 pl-10">
              <FaLocationArrow />
              <p>Surat, Gujrat</p>
            </div>

            <div className="flex items-center gap-3 mt-3 pl-10">
              <FaMobileAlt />
              <p>+123 456 789</p>
            </div>

            {/* social Handles */}
            <div>
              <div className="flex items-center gap-3 mt-6 pl-10">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* Footer LInks */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 col-span-2
         md:pl-10 "
          >
            {/* first col link */}
            <div>
              <div className="py-8 px-4">
                <h1
                  className="text-xl font-bold text-justify sm:text-left 
              mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(({ title, link }, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1
                    duration-300 hover:!text-primary space-x-1 text-gray-700"
                    >
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Second col link */}
            <div>
              <div className="py-8 px-4">
                <h1
                  className="text-xl font-bold text-justify sm:text-left 
              mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(({ title, link }, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1
                    duration-300 hover:!text-primary space-x-1 text-gray-700"
                    >
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third col link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(({ title, link }, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700"
                    >
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer copyright section */}
        <div>
          <div
            className="text-center py-5 border-t-2
          border-gray-300/50 bg-primary text-white"
          >
            @copyright 2024 All rights reserved || made with by ABCD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
