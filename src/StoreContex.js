import React from "react";
import store from "./redux/redux-store";

const StoreContex = React.createContext(null);
export const Provider = (props) => {
    return <StoreContex.Provider value={props.store}>
        {props.children}
    </StoreContex.Provider>
}

export default StoreContex;