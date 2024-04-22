import { createContext, useState } from 'react';
import api from '../api';

export const UserContext = createContext({  } as any);

export const UserStorage = ({ children }: any) => {

    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({})
    

    const getUser = () => {
        api.get(`/users/${userName}`).then(response => {
            setUser(response.data)
        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }

	return(
		<UserContext.Provider value={{
            userName, 
            setUserName, 
            getUser,
            user, 
            }}>
			{children}
		</UserContext.Provider>
	)

}