import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { connect } from "react-redux";
import { REMOVE_ITEM, INCREASE_AMOUNT, DECREASE_AMOUNT } from "../actions";

const SingleItem = ({
  id,
  title,
  price,
  img,
  amount,
  removeItem,
  increaseAmount,
  decreaseAmount,
}) => {
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;

  return {
    removeItem: () => dispatch({ type: REMOVE_ITEM, payload: { id } }),
    increaseAmount: () => dispatch({ type: INCREASE_AMOUNT, payload: { id } }),
    decreaseAmount: () => dispatch({ type: DECREASE_AMOUNT, payload: { id } }),
  };
};

export default connect(null, mapDispatchToProps)(SingleItem);
