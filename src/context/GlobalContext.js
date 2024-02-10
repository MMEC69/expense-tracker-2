import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//intailize
const initialState = {
    transactions: [
        //test data
        /*
        { id: 1, text: 'Flower', amount: -20 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 4, text: 'Camera', amount: 150 }
        */
    ]
}

//createcontext
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({children}) =>{
    //reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) =>{
        dispatch({
            type: "DELETE TRANSACTION",
            payload: id
        });
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type: "ADD TRANSACTION",
            payload: transaction
        });
    }

    //return
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}
