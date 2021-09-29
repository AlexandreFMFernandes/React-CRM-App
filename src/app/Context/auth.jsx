import React, {useState} from 'react'

const AuthContext = React.createContext({});

function AuthProvider(props) {

    //to call value to check if user is logged
    let isLogged = localStorage.getItem('logged');

    //call initial state of user logged or not
    const [logged, setLogged] = useState(isLogged === 'Y' ? true : false);

    return (
        <AuthContext.Provider value={{logged, setLogged}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}