import { useEffect } from "react";
import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";
import Totals from "./components/Totals";
import { GET_TOTAL } from "./actions";
import { connect } from "react-redux";

function App({ cart, getTotal }) {
  // useEffect for calculating total price and number of items
  useEffect(() => {
    getTotal();
  }, [cart]);

  return (
    <div className="bg-violet-800">
      <Navbar />
      <ItemContainer />
      <Totals />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart, isLoading: state.isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTotal: () => dispatch({ type: GET_TOTAL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
