import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <img src={assets.logo} className="mb-5 w-32" alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            Vogue Attire brings you trendy and stylish clothing for men, women,
            and kids. Elevate your wardrobe with our carefully curated
            collections, designed to keep you looking your best every day.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>(415) 555-0132 </li>
            <li>contact@vogueattire.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ vogueattire.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
