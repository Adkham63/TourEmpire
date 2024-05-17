import React from "react";
import { FaFacebookSquare, FaInstagram, FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#222]">Tour Empire</h1>
        <p className="py-4 text-[#222]">
          From Dreams to Discoveries: Crafting Your Ultimate Travel Experiences
        </p>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6 text-[#222]">
        <div>
          <h6 className="font-medium text-[#222]">Info</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#tours">Tours</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#222]">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#about">About</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#222]">Phone</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="tel:+998998373560">+998 99 837 35 60</a>
            </li>
            <li className="py-2 text-sm">
              <a href="mailto:munism889@gmail.com">munism889@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
