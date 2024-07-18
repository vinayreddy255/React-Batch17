import React from "react";

const Context1 = (props) => {
    const Context = React.createContext();
    return (
        <Context.Provider value={{ name: 'Hello' }} />
    )
}
export default Context1;