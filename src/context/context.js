import { createContext, useState } from 'react';

const Context = createContext({
    contact: false,
    onHandleCancel: () => {},
    onHandleOpen: () => {},
});
export const ContextProvider = (props) => {
    const [contact, setContact] = useState(false);
    const handleContactOpen = () => {
        setContact(true);
    };
    const handleContactClose = () => {
        setContact(false);
    };
    return (
        <Context.Provider
            value={{
                contact: contact,
                onHandleCancel: handleContactClose,
                onHandleOpen: handleContactOpen,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default Context;
