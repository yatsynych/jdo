import HttpRequest from './apiHelper'

export const postSignInUser = (auth) => 
  HttpRequest('/api/auth/signin', 'POST', auth.formSingIn)

export const postSignUpUser = (auth) =>
  HttpRequest('/api/auth/signup', 'POST', auth.formSingUp)

export const setUserToLocalStorage = (user) =>
  localStorage.setItem('user', JSON.stringify(user))

export const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('user'))