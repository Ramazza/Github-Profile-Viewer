import { createContext, useState } from 'react';
import api from '../api';

export const UserContext = createContext({  } as any);

export const UserStorage = ({ children }: any) => {

    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({})
    const [followers, setFollowers] = useState({})
    const [following, setFollowing] = useState({})
    const [repos, setRepos] = useState({})

    const getUser = () => {
        api.get(`/users/${userName}`).then(response => {
            setUser(response.data)
        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }

    const getFollowers = () => {
        api.get(`/users/${userName}/followers`).then(response => {
            setFollowers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }

    const getFollowing = () => {
        api.get(`/users/${userName}/following`).then(response => {
            setFollowing(response.data);
        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }

    interface Repository {
        name: string;
        description: string;
        language: string;
        stargazers_count: number;
        forks: number;
    }

    const getRepo = () => {
        api.get(`/users/${userName}/repos`).then(response => {

            const filteredData: Repository[] = response.data.map((repo: Repository) => ({
                name: repo.name,
                description: repo.description,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks: repo.forks,
            }));

            setRepos(filteredData);

        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }


	return(
		<UserContext.Provider value={{
            userName, 
            setUserName, 
            getUser,
            getFollowers,
            getFollowing,
            getRepo,
            user, 
            repos,
            followers,
            following,
            }}>
			{children}
		</UserContext.Provider>
	)

}