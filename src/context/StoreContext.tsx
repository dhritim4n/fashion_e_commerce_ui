import React, { createContext, useState } from "react";

export const StoreContext = createContext<any>(null);

export function StoreContextProvider({ children }: React.PropsWithChildren) {
    const [store, setStore] = useState({
        user: null,
        cart: [],
    });

    const value = {
        store,
        setStore
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}
