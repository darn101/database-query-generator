import { createContext, useState } from "react";


export const NameContext = createContext('');

const NameProvider = ({ children }) => {
    const [account, SetAccount] = useState(null);

    return (
        <NameContext.Provider value={{ account, SetAccount }}>
            {children}
        </NameContext.Provider>
    )
}

export default NameProvider;