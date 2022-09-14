import React from "react";
import { connect } from "react-redux";
import { CLEAR_CART } from "../actions";

const Totals = ({ totalPrice, dispatch }) => {
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
              onClick={() => dispatch({ type: CLEAR_CART })}
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

const mapStateToProps = (state) => {
  return { totalPrice: state.totalPrice };
};

export default connect(mapStateToProps)(Totals);
