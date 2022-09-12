import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Totals = () => {
  const { totalPrice, clearCart } = useCartContext();

  return (
    <>
      <div className="bg-white h-4/6">
        <div className="w-11/12 md:w-8/12 mx-auto max-w-[1100px] pt-2">
          <div>
            <p className="float-right font-bold">
              Total <span>${totalPrice}</span>
            </p>
          </div>
          <div>
            <button
              onClick={clearCart}
              className="px-1 bg-violet-800 rounded-md text-white font-bold hover:bg-slate-300 hover:text-black"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Totals;
