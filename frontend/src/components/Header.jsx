import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-around bg-black items-center p-4">
      <div className="text-white font-semibold flex gap-4 justify-center items-center">
        <div>Abstract</div>
        <div>Help Center</div>
      </div>
      <Link to={"/create"} className="text-white rounded-lg font-semibold bg-gray-800 px-3 py-1">
        Submit a Request
      </Link>
    </div>
  );
};

export default Header;
