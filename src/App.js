import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Totals from "./components/Totals";
import { useCartContext } from "./hooks/useCartContext";

function App() {
  const { isLoading } = useCartContext();

  return (
    <>
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
    </>
  );
}

export default App;
