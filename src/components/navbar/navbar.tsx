import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between p-5 px-12 items-center">
      <div className="w-40">
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2018/09/6-feather-drawing-2.png"
          alt="Hyp3rs logo"
        />
      </div>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <Link href="/login">
        <div>Login</div>
      </Link>
    </div>
  );
}

export default Navbar;
