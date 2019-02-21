import axios from 'axios';
import { csrfToken } from 'rails-ujs';


export const setAxiosDefaults = () => {
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken();
  axios.defaults.headers.common.Accept = 'application/json';
};

setAxiosDefaults();

const updateCsrfToken = (updatedCsrfToken) => {
  axios.defaults.headers.common['X-CSRF-Token'] = updatedCsrfToken;
};

export const sessionApi = {
  login: ({ email, password }) => (
    axios.post('/users/sign_in', {
      user: {
        email,
        password,
        remember_me: 1,
      },
    })
      .then((response) => {
        console.log('success');
        updateCsrfToken(response.data.csrf_token);
        return (response);
      })
  ),
  logout: () => (
    axios.delete(
      '/users/sign_out',
    )
      .then((response) => {
        console.log('success');
        updateCsrfToken(response.data.csrf_token);
        return (response);
      })
  ),
};

export const registrationApi = {
  signUp: ({
    email, password, passwordConfirmation,
  }) => (
    axios.post('/users', {
      user: {
        email,
        password,
        passwordConfirmation,
      },
    })
      .then((response) => {
        console.log('success');
        updateCsrfToken(response.data.csrf_token);
        return (response);
      })
  ),
};
