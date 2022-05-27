import React from "react";

function Nav() {
  return (
    <div className="fixed top-0  flex justify-between w-full p-5 bg-stone-900">
      <img
        className="object-contain w-20"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="object-contain w-7"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
