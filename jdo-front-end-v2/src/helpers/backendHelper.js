import HttpRequest from './apiHelper'

export const PostSignInUser = (auth) => 
  HttpRequest('/api/auth/signin', 'POST', auth.formSingIn)

export const PostSignUpUser = (auth) =>
  HttpRequest('/api/auth/signup', 'POST', auth.formSingUp)