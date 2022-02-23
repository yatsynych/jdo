export default async function HttpRequest(url, method = 'GET', body = null, headers = {}) {

  if (body) {
    body = JSON.stringify(body)
    headers['Content-Type'] = 'application/json'
  }

  let result = await fetch(url, {method, body, headers})  
    .then(async response => {
      const data = await response.json()
      if (response.ok) {
        //console.log('HttpRequest response.ok')
        return data
      } else {
       // console.log('HttpRequest !response.ok', data)
        throw (data.message || 'HttpRequest Error')
        //return Promise.reject({ status: response.status, data })
      }
    })
    .then(result => {
      //console.log('HttpRequest success:', result)
      return result
    })
    .catch(error => {
      //console.log('HttpRequest catch error:', error)
      throw error
    })

    return result

}