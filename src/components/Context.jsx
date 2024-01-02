import { createContext, useState } from "react";
 
export const ContextProvider = createContext();

export const  ModalContext = (props)=>{
    const [isOpen, setIsOpen]= useState(false)
    return(
        <>
            <ContextProvider.Provider value={[isOpen, setIsOpen]}>
                {props.children}
            </ContextProvider.Provider>

        </>
    )
}