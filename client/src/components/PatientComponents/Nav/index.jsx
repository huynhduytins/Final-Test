import { Link } from "react-router-dom";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import ButtonClient from "../../ButtonClient";

const NavbarPatient = () => {
  return (
    <header>
      <nav className="p-6">
        <div className="flex items-center justify-between font-medium font-semibold text-[#1f2278]">
          <div className="flex basis-1/6  justify-center">
            <img
              src="../../../src/assets/logo2.png"
              alt="logo"
              className="w-56"
            />
          </div>
          <ul className="flex basis-2/5 justify-between">
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex basis-1/3 items-center justify-end gap-10">
            <li>
              <FaSearch className="cursor-pointer text-lg text-[#565ACF]" />
            </li>
            <li className="hidden items-center gap-3 text-xl font-bold lg:flex">
              <FaPhoneAlt className="cursor-pointer text-lg text-[#565ACF]" />
              <p>(+84) 999 888 777</p>
            </li>
            <li>
              <ButtonClient color={"#565ACF"}>
                CONTACT US <BiCaretRight className="text-2xl" />
              </ButtonClient>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPatient;