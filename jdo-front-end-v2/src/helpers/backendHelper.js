import HttpRequest from './apiHelper'
import {useDispatch} from 'react-redux'
import {loginUserStatus} from '../store/auth/authActions'

export const PostSignInUser = (auth) => {

  console.log('PostSignInUser')
  //const dispatch = useDispatch()

  const request = HttpRequest('/api/auth/signin', 'POST', auth.formSingIn)

  request.then(async response => {
    console.log('response - ', response)
    if (response.error) {
      //dispatch(loginUserStatus(false))
      return false
    } else {
      //dispatch(loginUserStatus(true))
      return true
    }
  })
  .catch(error => {
    console.log('postSignInUser catch error:', error)
    return false
  })

  return true
}

export const PostSignUpUser = (auth) => {

  const dispatch = useDispatch()

  let request = HttpRequest('/api/auth/signup', 'POST', auth.formSingUp)

  request.then((response) => {
    console.log('response - ', response)
    if (response.error) {
      
      return false
    }

  })
  .catch(error => {
    console.log('postSignInUser catch error:', error)
    return false
  })

  return true
}