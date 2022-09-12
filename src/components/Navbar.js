import React from "react";
import { useCartContext } from "../hooks/useCartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { numberOfItems } = useCartContext();

  return (
    <nav className="flex bg-white justify-evenly h-16 text-black font-bold shadow-xl">
      <div className="my-auto">
        <p className="text-3xl text-violet-800 ">Redux Cart</p>
      </div>
      <div className="my-auto relative">
        <div className="z-[10] w-4 h-4 bg-violet-800 rounded-xl text-center text-white absolute top-0 left-4 text-sm">
          {numberOfItems}
        </div>
        <div>
          <ShoppingCartIcon className="h-8 my-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
