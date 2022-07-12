import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import DishList from "./components/DishList/DishList";
import { OrderedContextProvider } from "./components/contexts/ordered-context";

const App = () => {
    return (
        <OrderedContextProvider>
            <MainHeader />
            <Home />
            <DishList />
        </OrderedContextProvider>
    );
};

export default App;
