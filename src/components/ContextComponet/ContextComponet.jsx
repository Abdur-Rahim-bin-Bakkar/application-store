import React, { createContext, useState } from 'react';
export const InistallContext = createContext()

const ContextComponet = ({ children }) => {
    const [insitalls, setInistalls] = useState([])
    const data = {
        name:'rahim'
    }
    return (
        <div>
            <InistallContext value={{insitalls, setInistalls}}>
                {children}
            </InistallContext>
        </div>
    );
};

export default ContextComponet;