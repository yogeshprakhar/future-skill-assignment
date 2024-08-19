import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row w-full border items-top justify-evenly bg-black text-white pt-9 pb-6">
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-3">Abstract</h1>
        <h2>Braches</h2>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-3">Resources</h1>
        <h2>Blog</h2>
        <h2>Help Center</h2>
        <h2>Release Notes</h2>
        <h2>Status</h2>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-3">Community</h1>
        <h2>instagram</h2>
        <h2>Twitter</h2>
        <h2>github</h2>
        <h2>Linkedin</h2>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-3">Company</h1>
        <h2>About us</h2>
        <h2>Carrers</h2>
        <h2>legal</h2>
        <h1 className="font-semibold mt-2">Contact us</h1>
        <h2>@infomail.com</h2>
      </div>
      <div className="flex flex-col items-end justify-end">
        <h1>@Copyright 2024</h1>
        <h1>All right Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
