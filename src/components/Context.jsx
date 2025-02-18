import { createContext } from "react"


export const DataContext = createContext()
export default function ContextFun({children}){
 
    const value={
   
    }
    return   <DataContext.Provider value={value}>{children}</DataContext.Provider>
}