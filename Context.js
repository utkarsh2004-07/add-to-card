import { createContext, useContext, useReducer } from "react";



 export const statecontext=createContext();
 
 
 export const Context = ({reducer,initialstate,children}) =>{
    return(
        <statecontext.Provider value={useReducer(reducer,initialstate)}>
            {children}
        </statecontext.Provider>
    );
 }
   
 export const useStateValue=()=>
        useContext(statecontext)
    


 
 