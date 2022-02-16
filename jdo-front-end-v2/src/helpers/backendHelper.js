import HttpRequest from './apiHelper'

export const postSignInUser = (auth) => {

  console.clear()
  const response = HttpRequest('/api/auth/signin', 'POST', auth.formSingIn)

  //console.log(response)
  //console.log(formSingIn)
  //throw new Error ('New error')
  return false
}