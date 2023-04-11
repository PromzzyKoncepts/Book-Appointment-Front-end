import { publicRequest } from '../allRequests';
import { loginStart, loginSuccess, loginFailure } from './user/user';

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('user/login', user);
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData));
    localStorage.setItem('token', JSON.stringify(responseData.data.token));

    navigate('/');
  } catch (error) {
    dispatch(loginFailure());
    throw error;
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  const res = await publicRequest.post('/users', user);
  const responseData = res.data;
  delete responseData.headers;
  dispatch(loginSuccess(responseData));
};
