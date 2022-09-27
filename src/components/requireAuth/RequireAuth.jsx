import {Navigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import UserContext from '../../redux/UserReducer';
import axios from 'axios';

export const RequireAuth = ({children}) => {
    const {state} = useContext(UserContext);
    if(state.user.isAuthenticated == false ){
        return <Navigate to='/login' />
    }
    if (state.user.isAuthenticated === true) {
        axios.get(process.env.REACT_APP_BASE_URL_LOCAL + "user/?email=" + state.user.email).then((response) => {
            if (response.data == null) {
                return <Navigate to='/login' />
            }
        });
    }
    return children;
}