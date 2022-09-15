import React, { createContext, useState} from "react";

export const GlobalContext = createContext();

const ContextProvider = (props) => {
    const [menu, setMenu] = useState(false)


    const handleChange = () => {
      setMenu(true)
    };

    


  return (
    <GlobalContext.Provider value={{handleChange, menu, setMenu}}>
        {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;


