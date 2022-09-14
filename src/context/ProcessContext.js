import { useContext, useState } from "react";
import { createContext } from "react";

const ProcessContext = createContext()

export const ProcessProvider = ({children}) => {

    const [process, setProcess] = useState("")

    const values = {
        process,
        setProcess,
    }

    return (<ProcessContext.Provider value={values}>{children}</ProcessContext.Provider>)
}

export const useProcess = () => {
    return useContext(ProcessContext)
}

export default ProcessContext