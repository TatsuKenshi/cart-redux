import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useCartContext } from "../hooks/useCartContext";

const SingleItem = (item) => {
  const { id, title, price, img, amount } = item;

  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  return (
    <>
      <div className="flex mt-2 text-white">
        <div>
          <img src={img} alt={title} className="h-[80px]" />
        </div>
        <div className="w-max mr-auto">
          <p>{title}</p>
          <p>${price}</p>
          <button
            onClick={() => removeItem(id)}
            className="px-1 bg-white rounded-md text-black hover:bg-slate-100 font-bold"
          >
            Remove Item
          </button>
        </div>
        <div className="text-center">
          <div>
            <button onClick={() => increaseAmount(id)}>
              <ChevronUpIcon className="w-[16px] text-white" />
            </button>
          </div>
          <p>{amount}</p>
          <button onClick={() => decreaseAmount(id)}>
            <ChevronDownIcon className="w-[16px] text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
