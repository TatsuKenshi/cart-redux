import React from "react";
import SingleItem from "./SingleItem";
import { connect } from "react-redux";

const ItemContainer = ({ cart = [] }) => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-8 max-w-[1100px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Your Cart</h2>
      </div>
      <div className="mt-2">
        {cart.map((item) => {
          return <SingleItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(ItemContainer);
