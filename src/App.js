import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Totals from "./components/Totals";
import { useCartContext } from "./hooks/useCartContext";
import reducer from "./context/reducer";
import { data } from "../src/data/data";

// import createStore and Provider from redux/react-redux
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

// initial store (state) object stores state props and values
const initialStore = {
  cart: data,
  totalPrice: 0,
  numberOfItems: 5,
};

// create store
const store = createStore(reducer, initialStore);

function App() {
  const { isLoading } = useCartContext();

  return (
    <Provider store={store}>
      <div className="bg-violet-800">
        <Navbar />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ItemContainer />
            <Totals />
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
