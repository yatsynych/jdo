import { useCallback} from 'react'

export default async function HttpRequest(url, method = 'GET', body = null, headers = {}) {

  let response = {}
  let error = ''

  if (body) {
    body = JSON.stringify(body)
    headers['Content-Type'] = 'application/json'
  }

  await fetch(url, {method, body, headers})
    .then(response => response.json())
    .then(error => error);

  if (!response.ok) {
    error = response.message
    //throw new Error(error || 'Http response error')
  }

  return (response, error)

}