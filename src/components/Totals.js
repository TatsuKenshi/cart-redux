import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Totals = () => {
  const { totalPrice, clearCart } = useCartContext();

  return (
    <>
      <div className="w-11/12 md:w-8/12 mx-auto my-8 max-w-[1100px] text-white">
        <div className="">
          <p className="float-right">
            Total <span>${totalPrice}</span>
          </p>
        </div>
        <div>
          <button
            onClick={clearCart}
            className="px-1 bg-white rounded-md text-black hover:bg-slate-100"
          >
            clear cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Totals;
