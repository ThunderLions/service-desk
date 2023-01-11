import { useState } from 'react';

export const APIContext = React.createContext(null);

export const APIContextProvider = (props) => {
    const [authToken, setAuthToken] = useState();

    return <APIContext.Provider value={{ logIn, user, logOut }}>{props.children}</APIContext.Provider>;
};
