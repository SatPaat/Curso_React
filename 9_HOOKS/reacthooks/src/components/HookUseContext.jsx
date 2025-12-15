import { createContext } from "react"

export const someContext = createContext()



export const HookUseContext = ({ children }) => { 

    const contextValue = "testing context"

    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}

export default HookUseContext