import React, { useState } from "react";

const OrderedContext = React.createContext({
    cartDishList: [],
    summaryAmount: 0,
    manageCart: (dish, amount) => {},
});

export const OrderedContextProvider = (props) => {
    const [cartDishList, setCartDishList] = useState([]);
    const [summaryAmount, setSummaryAmount] = useState(0);
    const manageCart = (dish, amount) => {
        setCartDishList((prevCartDishList) => {
            if (
                prevCartDishList.filter((prevDish) => prevDish.id === dish.id)
                    .length === 0
            ) {
                return [
                    ...prevCartDishList,
                    {
                        ...dish,
                        amount: amount,
                    },
                ];
            }
            const tmpDishes = [...prevCartDishList];
            for (const tmpDish of tmpDishes) {
                if (
                    tmpDish.id === dish.id &&
                    tmpDish.amount === 1 &&
                    amount < 0
                ) {
                    return [...tmpDishes].filter(
                        (anotherTmp) => anotherTmp.id !== dish.id
                    );
                }
                if (tmpDish.id === dish.id) {
                    tmpDish.amount += amount;
                    break;
                }
            }
            return tmpDishes;
        });
        setSummaryAmount((prevSummaryAmount) => prevSummaryAmount + amount);
    };
    return (
        <OrderedContext.Provider
            value={{ cartDishList, manageCart, summaryAmount }}
        >
            {props.children}
        </OrderedContext.Provider>
    );
};

export default OrderedContext;
