import axios from 'axios';

export const login = (dispatch) => async(email, password) =>{
  try {
    dispatch({
      type: 'loadLoginRequest'
    });
    const { data: { data }} = await axios.post(`/users/login`, { userName: email, password });
    dispatch({
      type: 'loadLoginSuccess',
      payload: {
        user: data.user,
      }
    });
  } catch (error) {
    console.log("error",error);
    const { response: { data: { error: errorObj = {} } }} = error;
    dispatch({
      type: 'loadLoginFailed',
      payload: {
        error: errorObj.message || 'something went wrong'
      }
    })
  }
}
